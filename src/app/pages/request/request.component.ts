import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { QuoteService, QuoteItem, itemName } from '../../core/quote/quote.service';
import { SiteMetadataService } from '../../core/services/site-metadata.service';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css',
})
export class RequestComponent {
  protected readonly quote = inject(QuoteService);
  private readonly metadata = inject(SiteMetadataService);
  protected readonly itemName = itemName;
  protected readonly step = signal(1);
  protected readonly submitted = signal(false);
  protected readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/\S/), Validators.maxLength(160)] }),
    eventDate: new FormControl('', { nonNullable: true, validators: Validators.required }),
    delivery: new FormControl('delivery', { nonNullable: true }),
    fromDate: new FormControl('', { nonNullable: true, validators: Validators.required }),
    toDate: new FormControl('', { nonNullable: true, validators: Validators.required }),
    street: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/\S/), Validators.maxLength(250)] }),
    number: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/\S/), Validators.maxLength(40)] }),
    district: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/\S/), Validators.maxLength(160)] }),
    city: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/\S/), Validators.maxLength(160)] }),
    mounting: new FormControl(false, { nonNullable: true }),
    comments: new FormControl('', { nonNullable: true, validators: Validators.maxLength(1500) }),
  });
  protected get pickup(): boolean { return this.form.controls.delivery.value === 'pickup'; }
  protected get datesValid(): boolean {
    const { fromDate, eventDate, toDate } = this.form.getRawValue();
    return !!fromDate && !!eventDate && !!toDate && fromDate <= eventDate && eventDate <= toDate;
  }
  protected goToStep(step: number): void {
    this.step.set(step);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  protected image(item: QuoteItem): string {
    return item.product.variants?.find(variant => variant.id === item.variantId)?.imageSrc ?? item.product.imageSrc;
  }
  protected update(key: string, input: HTMLInputElement): void {
    this.quote.update(key, Number(input.value));
    input.value = String(this.quote.items().find(item => item.key === key)?.quantity ?? '');
  }
  protected send(): void {
    this.submitted.set(true);
    this.form.markAllAsTouched();
    if (this.form.invalid || !this.datesValid || !this.quote.count()) return;
    const data = this.form.getRawValue();
    const date = (value: string) => value.split('-').reverse().join('/');
    const message = [
      'Hola, quisiera solicitar una cotización.',
      `A nombre de: ${data.name.trim()}`,
      `Fecha del evento: ${date(data.eventDate)}`,
      `Modalidad: ${this.pickup ? 'Retiro en local' : 'Entrega a domicilio'}`,
      `${this.pickup ? 'Retiro en local' : 'Entrega'}: ${date(data.fromDate)}`,
      `${this.pickup ? 'Devolución' : 'Recolección'}: ${date(data.toDate)}`,
      `Domicilio del evento: ${data.street.trim()}, ${data.number.trim()}, ${data.district.trim()}, ${data.city.trim()}`,
      '', 'Equipo solicitado:',
      ...this.quote.items().map(item => `• ${item.quantity} × ${itemName(item)}`),
      '', `Solicito montaje: ${data.mounting ? 'Sí' : 'No'}`,
      `Comentarios: ${data.comments.trim() || 'Sin comentarios'}`,
      '', 'Quedo pendiente de precio y disponibilidad.',
    ].join('\n');
    window.open(`https://wa.me/${this.metadata.whatsappPhone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }
}
