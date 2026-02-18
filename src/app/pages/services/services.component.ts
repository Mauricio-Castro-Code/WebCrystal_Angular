import { Component } from '@angular/core';

import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceItem } from '../../shared/interfaces/service-item.interface';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [ServiceListComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  protected readonly services: readonly ServiceItem[] = [
    {
      title: 'Mobiliario para Bodas',
      description: 'Sillas, mesas y montaje para bodas con estilo clasico o contemporaneo.',
      image: '/Crossback.webp',
      ctaLabel: 'Ver catalogo',
      ctaLink: '/catalogo',
    },
    {
      title: 'Carpas y Exteriores',
      description: 'Infraestructura y ambientacion para eventos al aire libre.',
      image: '/Chachapa.webp',
      ctaLabel: 'Solicitar asesoria',
      ctaLink: '/contacto',
    },
    {
      title: 'Salas Lounge',
      description: 'Mobiliario premium para zonas de convivencia y recepcion.',
      image: '/LuisXV.webp',
      ctaLabel: 'Ver opciones',
      ctaLink: '/catalogo',
    },
    {
      title: 'Vajilla y Cristaleria',
      description: 'Colecciones para banquetes formales y eventos sociales.',
      image: '/VajillaCuadrada.webp',
      ctaLabel: 'Cotizar',
      ctaLink: '/contacto',
    },
  ];
}
