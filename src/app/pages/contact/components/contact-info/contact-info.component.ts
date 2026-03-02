import { Component } from '@angular/core';

import { CarpasComponent } from '../carpas/carpas.component';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CarpasComponent],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css',
})
export class ContactInfoComponent {}
