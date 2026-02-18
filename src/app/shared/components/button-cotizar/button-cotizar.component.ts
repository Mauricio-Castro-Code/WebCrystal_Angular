import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-cotizar',
  standalone: true,
  imports: [],
  templateUrl: './button-cotizar.component.html',
  styleUrl: './button-cotizar.component.css',
})
export class ButtonCotizarComponent {
  @Input() phone = '5212226503588';
  @Input() message = 'Hola, quiero cotizar mobiliario para mi evento. Me pueden ayudar?';
  @Input() label = 'Cotiza por WhatsApp';
  @Input() imageSrc = '/WhatsAppButton.webp';

  protected get whatsappUrl(): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;
  }
}
