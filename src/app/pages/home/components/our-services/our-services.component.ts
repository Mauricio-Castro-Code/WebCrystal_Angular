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
      title: 'Catering',
      description:
        'Experiencias gastronomicas de alta cocina disenadas para deleitar a todos tus invitados con menus personalizados.',
      link: '/servicios',
      linkText: 'Ver mas',
      ariaLabel: 'Ver mas sobre catering',
      icon: 'catering',
    },
    {
      title: 'Mobiliario',
      description:
        'Sillas, mesas y elementos decorativos de tendencia. Variedad de estilos desde lo clasico hasta lo industrial.',
      link: '/catalogo',
      linkText: 'Ver mas',
      ariaLabel: 'Ver mas sobre mobiliario',
      icon: 'mobiliario',
    },
    {
      title: 'Carpas',
      description:
        'Carpas elegantes y resistentes para eventos al aire libre. Proteccion y estilo sin importar el clima.',
      link: '/servicios',
      linkText: 'Ver mas',
      ariaLabel: 'Ver mas sobre carpas para eventos',
      icon: 'carpas',
    },
  ];
}
