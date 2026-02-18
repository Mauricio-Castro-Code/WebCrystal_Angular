import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SiteMetadataService {
  readonly whatsappPhone = '5212226503588';
  readonly whatsappDefaultMessage =
    'Hola, quiero cotizar mobiliario para mi evento. Me pueden ayudar?';
  readonly companyName = 'Alquiladora Crystal';
}
