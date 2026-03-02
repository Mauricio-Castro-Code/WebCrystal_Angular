import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface ContactApiResponse {
  readonly message?: string;
}

@Component({
  selector: 'app-send-message',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './send-message.component.html',
  styleUrl: './send-message.component.css',
})
export class SendMessageComponent {
  private readonly formBuilder = inject(FormBuilder);

  protected readonly eventTypes = [
    'Boda',
    'Evento corporativo',
    'Graduacion',
    'Celebracion social',
    'Otro',
  ] as const;

  protected readonly submitState = signal<'idle' | 'submitting' | 'success' | 'error'>('idle');
  protected readonly submitMessage = signal('');
  protected readonly submitAttempted = signal(false);

  protected readonly contactForm = this.formBuilder.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
    correo: ['', [Validators.required, Validators.email, Validators.maxLength(180)]],
    telefono: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
    tipoEvento: ['', Validators.required],
    mensaje: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(2500)]],
    website: [''],
  });

  protected async onSubmit(): Promise<void> {
    this.submitAttempted.set(true);
    this.submitMessage.set('');

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.submitState.set('error');
      this.submitMessage.set('Revisa los campos marcados antes de enviar.');
      return;
    }

    this.submitState.set('submitting');

    const formValue = this.contactForm.getRawValue();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formValue.nombre.trim(),
          email: formValue.correo.trim(),
          phone: formValue.telefono.trim(),
          eventType: formValue.tipoEvento.trim(),
          message: formValue.mensaje.trim(),
          honeypot: formValue.website.trim(),
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as ContactApiResponse;

      if (!response.ok) {
        this.submitState.set('error');
        this.submitMessage.set(payload.message ?? 'No se pudo enviar la solicitud. Intenta de nuevo.');
        return;
      }

      this.submitState.set('success');
      this.submitMessage.set(payload.message ?? 'Solicitud enviada correctamente.');
      this.submitAttempted.set(false);
      this.contactForm.reset({
        nombre: '',
        correo: '',
        telefono: '',
        tipoEvento: '',
        mensaje: '',
        website: '',
      });
    } catch {
      this.submitState.set('error');
      this.submitMessage.set('No pudimos conectar con el servidor. Intenta de nuevo en un momento.');
    }
  }
}
