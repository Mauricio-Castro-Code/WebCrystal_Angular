import { Component } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {}
