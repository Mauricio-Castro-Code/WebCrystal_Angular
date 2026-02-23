import { Component } from '@angular/core';

interface TestimonialItem {
  readonly quote: string;
  readonly author: string;
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
        'Excelente servicio y puntualidad. El mobiliario llego impecable y transformo por completo nuestro evento.',
      author: 'Daniela R.',
    },
    {
      quote:
        'Nos ayudaron a seleccionar piezas elegantes para una cena corporativa. Gran acompanamiento en todo momento.',
      author: 'Ernesto G.',
    },
    {
      quote:
        'El montaje fue rapido y profesional. Sin duda volveremos a contratar para futuros eventos.',
      author: 'Daniel C.',
    },
  ];
}
