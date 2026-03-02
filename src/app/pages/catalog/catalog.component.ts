import { Component, computed, inject, signal } from '@angular/core';

import { SiteMetadataService } from '../../core/services/site-metadata.service';
import {
  CATALOG_CATEGORIES,
  CATALOG_CATEGORY_LABELS,
  CATALOG_PRODUCTS,
} from './data/catalog-products.data';
import { CatalogCtaCardComponent } from './components/catalog-cta-card/catalog-cta-card.component';
import { CatalogFiltersComponent } from './components/catalog-filters/catalog-filters.component';
import { CatalogGridComponent } from './components/catalog-grid/catalog-grid.component';
import { CatalogHeroComponent } from './components/catalog-hero/catalog-hero.component';
import {
  type CatalogCategoryId,
  type CatalogProduct,
  type CatalogProductCardItem,
} from './models/catalog-product.model';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [
    CatalogHeroComponent,
    CatalogFiltersComponent,
    CatalogGridComponent,
    CatalogCtaCardComponent,
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  private readonly metadata = inject(SiteMetadataService);

  protected readonly categories = CATALOG_CATEGORIES;
  protected readonly selectedCategory = signal<CatalogCategoryId>('mobiliario');
  protected readonly totalProducts = CATALOG_PRODUCTS.length;
  protected readonly ctaQuoteUrl = this.buildWhatsAppUrl(
    'Hola, quiero una propuesta personalizada para mi evento.',
  );

  protected readonly filteredProducts = computed<readonly CatalogProductCardItem[]>(() => {
    const selectedCategory = this.selectedCategory();
    const products = CATALOG_PRODUCTS.filter((product) => product.category === selectedCategory);

    return products.map((product) => this.toCardItem(product));
  });

  protected onCategoryChange(categoryId: CatalogCategoryId): void {
    this.selectedCategory.set(categoryId);
  }

  private toCardItem(product: CatalogProduct): CatalogProductCardItem {
    return {
      ...product,
      categoryLabel: CATALOG_CATEGORY_LABELS[product.category],
      quoteUrl: this.buildWhatsAppUrl(
        `Hola, quiero cotizar el articulo "${product.name}". Me apoyan con precio?`,
      ),
    };
  }

  private buildWhatsAppUrl(message: string): string {
    return `https://wa.me/${this.metadata.whatsappPhone}?text=${encodeURIComponent(message)}`;
  }
}
