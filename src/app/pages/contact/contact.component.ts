import { Component } from '@angular/core';

import { DeliveryInfoComponent } from '../../shared/components/delivery-info/delivery-info.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { MapsComponent } from './components/maps/maps.component';
import { SendMessageComponent } from './components/send-message/send-message.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [DeliveryInfoComponent, SendMessageComponent, ContactInfoComponent, MapsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
