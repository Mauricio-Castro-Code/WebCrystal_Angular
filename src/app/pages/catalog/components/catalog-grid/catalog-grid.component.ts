import { Component, Input } from '@angular/core';

import { CatalogCardComponent } from '../catalog-card/catalog-card.component';
import { type CatalogProductCardItem } from '../../models/catalog-product.model';

@Component({
  selector: 'app-catalog-grid',
  standalone: true,
  imports: [CatalogCardComponent],
  templateUrl: './catalog-grid.component.html',
  styleUrl: './catalog-grid.component.css',
})
export class CatalogGridComponent {
  @Input({ required: true }) products: readonly CatalogProductCardItem[] = [];
}
