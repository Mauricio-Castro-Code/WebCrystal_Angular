import { Component } from '@angular/core';

import { TeamMember } from '../../../../shared/interfaces/team-member.interface';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  protected readonly members: readonly TeamMember[] = [
    {
      name: 'Coordinacion de Eventos',
      role: 'Planeacion, montaje y seguimiento de cada proyecto.',
      photo: '/PeriqueraOrganica.webp',
    },
    {
      name: 'Asesoria Comercial',
      role: 'Acompanamiento personalizado para elegir mobiliario.',
      photo: '/BaseDorado.webp',
    },
    {
      name: 'Operacion y Logistica',
      role: 'Entrega puntual, instalacion segura y retiro programado.',
      photo: '/Calentador.webp',
    },
  ];
}
