import { computed, Injectable, signal } from '@angular/core';
import { CatalogProduct } from '../../pages/catalog/models/catalog-product.model';
import { CATALOG_PRODUCTS } from '../../pages/catalog/data/catalog-products.data';

export interface QuoteItem {
  readonly key: string;
  readonly product: CatalogProduct;
  readonly variantId?: string;
  readonly quantity: number;
}
export function validQuantity(quantity: number): boolean {
  return Number.isSafeInteger(quantity) && quantity > 0 && quantity <= 99999;
}
export function itemName(item: QuoteItem): string {
  const variant = item.product.variants?.find(v => v.id === item.variantId);
  return item.product.name + (variant ? ` — ${variant.label}` : '');
}
@Injectable({ providedIn: 'root' })
export class QuoteService {
  private readonly selection = signal<readonly QuoteItem[]>([]);
  readonly items = this.selection.asReadonly();
  readonly count = computed(() => this.items().length);
  readonly announcement = signal('');
  readonly recommendations = computed(() => {
    const rules = [['mesa-redonda', 'mantel-redondo'], ['mesa-tablon', 'mantel-tablon']];
    const ids = new Set(this.items().map(item => item.product.id));
    return rules.filter(([table, linen]) => ids.has(table) && !ids.has(linen))
      .flatMap(([, linen]) => CATALOG_PRODUCTS.filter(product => product.id === linen));
  });
  private storage?: Pick<Storage, 'getItem' | 'setItem'>;

  restore(storage: Pick<Storage, 'getItem' | 'setItem'>): void {
    this.storage = storage;
    try {
      const data: unknown = JSON.parse(storage.getItem('crystal-equipment-v1') ?? '[]');
      if (!Array.isArray(data)) return;
      for (const entry of data.slice(0, 200)) {
        if (!entry || typeof entry !== 'object') continue;
        const product = CATALOG_PRODUCTS.find(p => p.id === entry.productId);
        if (product) this.add(product, entry.quantity, entry.variantId);
      }
      this.announcement.set('');
    } catch { /* The catalog remains usable when browser storage is unavailable. */ }
  }
  add(product: CatalogProduct, quantity: number, variantId?: string): void {
    if (!validQuantity(quantity)) return;
    if (variantId && !product.variants?.some(v => v.id === variantId)) return;
    const selectedVariant = variantId ?? product.variants?.[0]?.id;
    const key = JSON.stringify([product.id, selectedVariant ?? '']);
    const existing = this.items().find(item => item.key === key);
    if (!validQuantity((existing?.quantity ?? 0) + quantity)) return;
    this.selection.update(items => existing
      ? items.map(item => item.key === key ? { ...item, quantity: item.quantity + quantity } : item)
      : [...items, { key, product, quantity, variantId: selectedVariant }]);
    this.announcement.set(`${quantity} × ${product.name} agregado a tu solicitud.`);
    this.persist();
  }
  update(key: string, quantity: number): void {
    if (!validQuantity(quantity)) return;
    this.selection.update(items => items.map(item => item.key === key ? { ...item, quantity } : item));
    this.persist();
  }
  remove(key: string): void {
    this.selection.update(items => items.filter(item => item.key !== key));
    this.persist();
  }
  private persist(): void {
    try {
      this.storage?.setItem('crystal-equipment-v1', JSON.stringify(this.items().map(item => ({
        productId: item.product.id, variantId: item.variantId, quantity: item.quantity,
      }))));
    } catch { /* Storage failures must not interrupt an active request. */ }
  }
}
