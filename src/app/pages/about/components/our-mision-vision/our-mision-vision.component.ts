import { Component } from '@angular/core';

type StatementIcon = 'mision' | 'vision';

interface StatementCard {
  readonly title: string;
  readonly description: string;
  readonly icon: StatementIcon;
}

@Component({
  selector: 'app-our-mision-vision',
  standalone: true,
  templateUrl: './our-mision-vision.component.html',
  styleUrl: './our-mision-vision.component.css',
})
export class OurMisionVisionComponent {
  protected readonly cards: readonly StatementCard[] = [
    {
      title: 'Mision',
      description:
        'Proveer soluciones de alta calidad en renta de mobiliario y logistica para eventos, con puntualidad, acompanamiento cercano y resultados consistentes.',
      icon: 'mision',
    },
    {
      title: 'Vision',
      description:
        'Ser la empresa referente en el centro del pais por nuestra excelencia operativa, innovacion en catalogo y capacidad para transformar espacios en experiencias memorables.',
      icon: 'vision',
    },
  ];
}
