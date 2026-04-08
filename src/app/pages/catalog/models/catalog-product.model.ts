export type CatalogCategoryId = 'manteleria' | 'mobiliario' | 'loza' | 'cristaleria' | 'otros';

export type CatalogProductCategoryId = CatalogCategoryId;


export interface CatalogCategory {
  readonly id: CatalogCategoryId;
  readonly label: string;
}

export interface CatalogProductVariant {
  readonly id: string;
  readonly label: string;
  readonly color: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
}

export interface CatalogProduct {
  readonly id: string;
  readonly name: string;
  readonly category: CatalogProductCategoryId;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly imageWidth: number;
  readonly imageHeight: number;
  readonly variants?: readonly CatalogProductVariant[];
}

export interface CatalogProductCardItem extends CatalogProduct {
  readonly categoryLabel: string;
  readonly quoteUrl: string;
}
