import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type CateringIcon = 'banquete' | 'catering';

interface CateringFeature {
  readonly icon: CateringIcon;
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-catering-banquetes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catering-banquetes.component.html',
  styleUrl: './catering-banquetes.component.css',
})
export class CateringBanquetesComponent {
  protected readonly features: readonly CateringFeature[] = [
    {
      icon: 'banquete',
      title: 'Banquetes de alta cocina',
      description:
        'Menus personalizados para bodas, eventos corporativos y celebraciones sociales con presentacion premium.',
    },
    {
      icon: 'catering',
      title: 'Catering profesional',
      description:
        'Estaciones, barras, coffee breaks y servicio coordinado para mantener ritmo, orden y experiencia de calidad.',
    },
  ];
}
