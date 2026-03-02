import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CarpaBenefit {
  readonly label: string;
}

@Component({
  selector: 'app-carpas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carpas.component.html',
  styleUrl: './carpas.component.css',
})
export class CarpasComponent {
  protected readonly benefits: readonly CarpaBenefit[] = [
    { label: 'Capacidad adaptable para eventos pequenos y de gran formato.' },
    { label: 'Montaje profesional con enfoque en seguridad estructural.' },
    { label: 'Opciones de iluminacion y ambientacion para diferentes estilos.' },
  ];
}
