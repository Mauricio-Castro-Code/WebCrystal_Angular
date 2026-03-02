import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type FurnitureIcon = 'mesas-sillas' | 'manteleria-vajilla' | 'equipo-servicio';

interface FurnitureCategory {
  readonly icon: FurnitureIcon;
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-renta-mobiliario',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './renta-mobiliario.component.html',
  styleUrl: './renta-mobiliario.component.css',
})
export class RentaMobiliarioComponent {
  protected readonly categories: readonly FurnitureCategory[] = [
    {
      icon: 'mesas-sillas',
      title: 'Mesas y Sillas',
      description:
        'Colecciones para bodas y eventos empresariales, desde estilos clasicos hasta propuestas contemporaneas.',
    },
    {
      icon: 'manteleria-vajilla',
      title: 'Manteleria y Vajilla',
      description:
        'Setups elegantes con cristaleria, cuberteria y manteles para elevar la presentacion de cada mesa.',
    },
    {
      icon: 'equipo-servicio',
      title: 'Equipo de Servicio',
      description:
        'Calentadores, charolas, cafeteras y equipo logistico para una operacion fluida durante el evento.',
    },
  ];
}
