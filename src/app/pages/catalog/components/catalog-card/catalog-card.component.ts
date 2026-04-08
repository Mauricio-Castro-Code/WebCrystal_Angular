import { Component, computed, input, signal } from '@angular/core';

import {
  type CatalogProductCardItem,
  type CatalogProductVariant,
} from '../../models/catalog-product.model';

@Component({
  selector: 'app-catalog-card',
  standalone: true,
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.css',
})
export class CatalogCardComponent {
  readonly product = input.required<CatalogProductCardItem>();

  private readonly selectedVariantId = signal<string | null>(null);

  protected readonly activeVariant = computed<CatalogProductVariant | null>(() => {
    const variants = this.product().variants;
    if (!variants?.length) return null;
    const id = this.selectedVariantId();
    return variants.find((variant) => variant.id === id) ?? variants[0];
  });

  protected readonly displayImage = computed(() => {
    const variant = this.activeVariant();
    const product = this.product();
    return {
      src: variant?.imageSrc ?? product.imageSrc,
      alt: variant?.imageAlt ?? product.imageAlt,
    };
  });

  protected selectVariant(id: string): void {
    this.selectedVariantId.set(id);
  }
}
