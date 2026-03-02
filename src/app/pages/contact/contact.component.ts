import { Component } from '@angular/core';

import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { MapsComponent } from './components/maps/maps.component';
import { SendMessageComponent } from './components/send-message/send-message.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [SendMessageComponent, ContactInfoComponent, MapsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
