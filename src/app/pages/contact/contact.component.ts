import { Component } from '@angular/core';

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MapComponent } from './components/map/map.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactFormComponent, MapComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
