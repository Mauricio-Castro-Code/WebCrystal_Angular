export type CatalogCategoryId = 'manteleria' | 'mobiliario' | 'loza' | 'otros';

export type CatalogProductCategoryId = CatalogCategoryId;


export interface CatalogCategory {
  readonly id: CatalogCategoryId;
  readonly label: string;
}

export interface CatalogProduct {
  readonly id: string;
  readonly name: string;
  readonly category: CatalogProductCategoryId;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly imageWidth: number;
  readonly imageHeight: number;
}

export interface CatalogProductCardItem extends CatalogProduct {
  readonly categoryLabel: string;
  readonly quoteUrl: string;
}
