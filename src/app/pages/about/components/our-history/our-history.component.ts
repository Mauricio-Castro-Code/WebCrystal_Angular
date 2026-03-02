import { Component } from '@angular/core';

interface HistoryMilestone {
  readonly period: string;
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-our-history',
  standalone: true,
  templateUrl: './our-history.component.html',
  styleUrl: './our-history.component.css',
})
export class OurHistoryComponent {
  protected readonly milestones: readonly HistoryMilestone[] = [
    {
      period: '1990',
      title: 'Fundacion',
      description:
        'Iniciamos operaciones en Puebla con un inventario inicial y una meta clara: elevar la calidad del mercado local de renta para eventos.',
    },
    {
      period: '2008',
      title: 'Expansion de servicios',
      description:
        'Incorporamos banquetes y carpas estructurales para cubrir eventos de gran escala con un solo equipo de coordinacion.',
    },
    {
      period: '2018',
      title: 'Linea premium',
      description:
        'Lanzamos nuevas colecciones de mobiliario para ofrecer propuestas mas versatiles en bodas, eventos empresariales y celebraciones privadas.',
    },
    {
      period: 'Actualidad',
      title: 'Operacion consolidada',
      description:
        'Hoy somos un aliado estrategico para planners, salones y empresas que requieren cumplimiento logistico y presentacion impecable.',
    },
  ];
}
