import { Component } from '@angular/core';

type TrustIcon = 'experiencia' | 'soporte' | 'calidad';

interface TrustItem {
  readonly value: string;
  readonly label: string;
  readonly icon: TrustIcon;
}

@Component({
  selector: 'app-barra-confianza',
  standalone: true,
  templateUrl: './barra-confianza.component.html',
  styleUrl: './barra-confianza.component.css',
})
export class BarraConfianzaComponent {
  protected readonly trustItems: readonly TrustItem[] = [
    {
      value: 'Desde 1991',
      label: 'Trayectoria en renta y servicios para eventos',
      icon: 'experiencia',
    },
    {
      value: 'Atención directa',
      label: 'Mobiliario, carpas y catering con nuestro equipo',
      icon: 'soporte',
    },
    {
      value: 'Experiencia institucional',
      label: 'Participación en eventos de gran escala',
      icon: 'calidad',
    },
  ];
}
