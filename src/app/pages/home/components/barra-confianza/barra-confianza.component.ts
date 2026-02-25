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
      value: '+30 años',
      label: 'Experiencia Comprobada',
      icon: 'experiencia',
    },
    {
      value: '100% Satisfacción',
      label: 'Entrega Garantizada',
      icon: 'soporte',
    },
    {
      value: 'Mobiliario Destacado ',
      label: 'Limpio y en excelente estado',
      icon: 'calidad',
    },
  ];
}
