import { Component, Input } from '@angular/core';

import { type CatalogProductCardItem } from '../../models/catalog-product.model';

@Component({
  selector: 'app-catalog-card',
  standalone: true,
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.css',
})
export class CatalogCardComponent {
  @Input({ required: true }) product!: CatalogProductCardItem;
}
