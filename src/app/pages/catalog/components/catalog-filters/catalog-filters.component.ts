import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type CatalogCategory, type CatalogCategoryId } from '../../models/catalog-product.model';

@Component({
  selector: 'app-catalog-filters',
  standalone: true,
  templateUrl: './catalog-filters.component.html',
  styleUrl: './catalog-filters.component.css',
})
export class CatalogFiltersComponent {
  @Input({ required: true }) categories: readonly CatalogCategory[] = [];
  @Input({ required: true }) selectedCategory!: CatalogCategoryId;
  @Output() readonly categoryChange = new EventEmitter<CatalogCategoryId>();

  protected selectCategory(categoryId: CatalogCategoryId): void {
    if (categoryId === this.selectedCategory) {
      return;
    }

    this.categoryChange.emit(categoryId);
  }
}
