import { Component } from '@angular/core';

interface PassionHighlight {
  readonly label: string;
}

@Component({
  selector: 'app-our-passion',
  standalone: true,
  templateUrl: './our-passion.component.html',
  styleUrl: './our-passion.component.css',
})
export class OurPassionComponent {
  protected readonly highlights: readonly PassionHighlight[] = [
    { label: 'Atencion personalizada en cada etapa del evento' },
    { label: 'Catalogo de mobiliario premium para multiples estilos' },
    { label: 'Montaje profesional con estandares operativos consistentes' },
  ];
}
