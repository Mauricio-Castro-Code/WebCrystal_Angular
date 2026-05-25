import { Component } from '@angular/core';

interface TestimonialItem {
  readonly quote: string;
  readonly author: string;
  readonly initials: string;
  readonly eventType: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  protected readonly testimonials: readonly TestimonialItem[] = [
    {
      quote:
        'Excelente servicio y puntualidad. El mobiliario llegó impecable y transformó por completo nuestro evento.',
      author: 'Daniela R.',
      initials: 'DR',
      eventType: 'Boda',
    },
    {
      quote:
        'Nos ayudaron a seleccionar piezas elegantes para una cena corporativa. Gran acompañamiento en todo momento.',
      author: 'Ernesto G.',
      initials: 'EG',
      eventType: 'Evento corporativo',
    },
    {
      quote:
        'El montaje fue rápido y profesional. Sin duda volveremos a contratar para futuros eventos.',
      author: 'Daniel C.',
      initials: 'DC',
      eventType: 'XV años',
    },
  ];
}
