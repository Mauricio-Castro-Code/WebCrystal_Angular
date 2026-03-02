import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-cta-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cta-card.component.html',
  styleUrl: './cta-card.component.css',
})
export class CtaCardComponent {}
