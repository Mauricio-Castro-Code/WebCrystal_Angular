import { Component } from '@angular/core';


interface ContactChannel {
  readonly label: string;
  readonly value: string;
  readonly href: string;
}

@Component({
  selector: 'app-contact-carpas',
  standalone: true,
  imports: [],
  templateUrl: './carpas.component.html',
  styleUrl: './carpas.component.css',
})
export class CarpasComponent {
  protected readonly channels: ContactChannel[] = [
    {
      label: 'Telefono',
      value: '+52 (222) 233 6166',
      href: 'tel:+522222336166',
    },
    {
      label: 'WhatsApp',
      value: '+52 (222) 650 3588',
      href: 'https://api.whatsapp.com/send/?phone=5212226503588&text=Hola%2C+quiero+cotizar+mobiliario+para+mi+evento.+Me+pueden+ayudar%3F&type=phone_number&app_absent=0',
    },
    {
      label: 'Correo',
      value: 'alquiladoracrystal@hotmail.com',
      href: 'mailto:alquiladoracrystal@hotmail.com',
    },
  ];
}
