import { Component } from '@angular/core';

type ValueIcon = 'puntualidad' | 'calidad' | 'profesionalismo' | 'pasion';

interface ValueItem {
  readonly title: string;
  readonly description: string;
  readonly icon: ValueIcon;
}

@Component({
  selector: 'app-our-values',
  standalone: true,
  templateUrl: './our-values.component.html',
  styleUrl: './our-values.component.css',
})
export class OurValuesComponent {
  protected readonly values: readonly ValueItem[] = [
    {
      title: 'Puntualidad',
      description: 'Logistica exacta para respetar tiempos de entrega, montaje y desmontaje.',
      icon: 'puntualidad',
    },
    {
      title: 'Calidad',
      description: 'Mobiliario y procesos de trabajo alineados a estandares premium.',
      icon: 'calidad',
    },
    {
      title: 'Profesionalismo',
      description: 'Equipo capacitado para resolver requerimientos tecnicos y operativos.',
      icon: 'profesionalismo',
    },
    {
      title: 'Pasion',
      description: 'Cuidamos cada detalle para convertir ideas en experiencias memorables.',
      icon: 'pasion',
    },
  ];
}
