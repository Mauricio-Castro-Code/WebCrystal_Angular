import {
  type CatalogCategory,
  type CatalogProduct,
  type CatalogProductCategoryId,
} from '../models/catalog-product.model';

export const CATALOG_CATEGORIES: readonly CatalogCategory[] = [
  { id: 'manteleria', label: 'Manteleria' },
  { id: 'mobiliario', label: 'Mobiliario' },
  { id: 'loza', label: 'Loza' },
  { id: 'otros', label: 'Otros' },
];

export const CATALOG_CATEGORY_LABELS: Readonly<Record<CatalogProductCategoryId, string>> = {
  loza: 'Loza',
  mobiliario: 'Mobiliario',
  manteleria: 'Manteleria',
  otros: 'Otros',
};



export const CATALOG_PRODUCTS: readonly CatalogProduct[] = [
  {
    id: 'silla-crossback',
    name: 'Silla Crossback Madera',
    category: 'mobiliario',
    imageSrc: '/Crossback.webp',
    imageAlt: 'Silla Crossback de madera para montaje de eventos',
    imageWidth: 1200,
    imageHeight: 750,
  },
  {
    id: 'silla-luis-xv',
    name: 'Silla Luis XV',
    category: 'mobiliario',
    imageSrc: '/LuisXV.webp',
    imageAlt: 'Silla Luis XV para eventos premium',
    imageWidth: 1200,
    imageHeight: 750,
  },
  {
    id: 'periquera-organica',
    name: 'Periquera Organica',
    category: 'mobiliario',
    imageSrc: '/PeriqueraOrganica.webp',
    imageAlt: 'Periquera organica para barra de cocteleria',
    imageWidth: 1200,
    imageHeight: 750,
  },
  {
    id: 'plato-base-dorado',
    name: 'Plato Base Dorado Luxury',
    category: 'loza',
    imageSrc: '/BaseDorado.webp',
    imageAlt: 'Plato base dorado para montaje de mesa elegante',
    imageWidth: 1200,
    imageHeight: 750,
  },
  {
    id: 'vajilla-cuadrada',
    name: 'Loza Cuadrada Premium',
    category: 'loza',
    imageSrc: '/VajillaCuadrada.webp',
    imageAlt: 'Loza cuadrada premium para banquetes',
    imageWidth: 1200,
    imageHeight: 750,
  },
  {
    id: 'manteleria-evento',
    name: 'Manteleria de Evento',
    category: 'manteleria',
    imageSrc: '/Chachapa-768.webp',
    imageAlt: 'Manteleria para mesas de boda y eventos corporativos',
    imageWidth: 768,
    imageHeight: 510,
  },
  {
    id: 'calentador-servicio',
    name: 'Calentador de Servicio',
    category: 'otros',
    imageSrc: '/Calentador.webp',
    imageAlt: 'Calentador para servicio de alimentos en eventos',
    imageWidth: 1200,
    imageHeight: 750,
  },
  {
    id: 'setup-exteriores',
    name: 'Setup de Exteriores',
    category: 'otros',
    imageSrc: '/Chachapa-768.webp',
    imageAlt: 'Montaje de exteriores para eventos con mobiliario y carpas',
    imageWidth: 768,
    imageHeight: 510,
  },
];
