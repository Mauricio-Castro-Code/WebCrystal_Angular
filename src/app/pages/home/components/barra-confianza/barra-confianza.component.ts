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
      value: '+500 Eventos',
      label: 'Experiencia Comprobada',
      icon: 'experiencia',
    },
    {
      value: 'Atencion 24/7',
      label: 'Soporte Continuo',
      icon: 'soporte',
    },
    {
      value: 'Calidad Premium',
      label: 'Materiales de Lujo',
      icon: 'calidad',
    },
  ];
}
