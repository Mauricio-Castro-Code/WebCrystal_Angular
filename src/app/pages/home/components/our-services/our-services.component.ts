import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ServiceIcon = 'catering' | 'mobiliario' | 'carpas';

interface ServiceCard {
  readonly title: string;
  readonly description: string;
  readonly link: string;
  readonly linkText: string;
  readonly ariaLabel: string;
  readonly icon: ServiceIcon;
  readonly featured?: boolean;
  readonly badge?: string;
}

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
})
export class OurServicesComponent {
  protected readonly services: readonly ServiceCard[] = [
    {
      title: 'Renta de Sillas, Mesas y Mobiliario',
      description:
        'Renta de sillas, mesas, vajilla, cristalería y mantelería premium para eventos en Puebla. Solicita entrega y montaje al cotizar; sus costos dependen de la distancia, el equipo y el servicio.',
      link: '/catalogo',
      linkText: 'Ver catálogo',
      ariaLabel: 'Ver catálogo de renta de sillas y mesas para eventos',
      icon: 'mobiliario',
      featured: true,
      badge: 'Mobiliario para tu evento',
    },
    {
      title: 'Catering y Banquetes',
      description:
        'Menús personalizados diseñados para bodas, XV años y eventos corporativos. Alta cocina con presentación impecable para cada ocasión.',
      link: '/servicios',
      linkText: 'Ver servicio',
      ariaLabel: 'Ver más sobre catering y banquetes',
      icon: 'catering',
    },
    {
      title: 'Instalación de Carpas',
      description:
        'Carpas elegantes y resistentes para eventos al aire libre en Puebla. Protección y estilo sin importar el clima, con instalación profesional.',
      link: '/servicios',
      linkText: 'Ver servicio',
      ariaLabel: 'Ver más sobre renta de carpas para eventos',
      icon: 'carpas',
    },
  ];
}
