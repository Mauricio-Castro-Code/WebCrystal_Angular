import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-cta-card',
  standalone: true,
  templateUrl: './catalog-cta-card.component.html',
  styleUrl: './catalog-cta-card.component.css',
})
export class CatalogCtaCardComponent {
  @Input({ required: true }) quoteUrl!: string;
}
