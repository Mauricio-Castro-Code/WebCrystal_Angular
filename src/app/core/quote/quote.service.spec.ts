// @vitest-environment node
import '@angular/compiler';
import { describe, it, expect } from 'vitest';
import { QuoteService } from './quote.service';
import { CATALOG_PRODUCTS } from '../../pages/catalog/data/catalog-products.data';

const product = (id: string) => CATALOG_PRODUCTS.find(p => p.id === id)!;
describe('Solicitud de equipo', () => {
  it('cuenta conceptos y suma cantidades repetidas', () => {
    const quote = new QuoteService();
    quote.add(product('silla-acojinada'), 100);
    quote.add(product('silla-acojinada'), 50);
    quote.add(product('mesa-redonda'), 10);
    expect(quote.count()).toBe(2);
    expect(quote.items()[0].quantity).toBe(150);
  });
  it('separa variantes y rechaza cantidades inválidas', () => {
    const quote = new QuoteService();
    const chair = product('silla-tiffany');
    quote.add(chair, 10, chair.variants![0].id);
    quote.add(chair, 20, chair.variants![1].id);
    for (const quantity of [0, -1, 1.5, NaN, Infinity]) quote.add(chair, quantity);
    expect(quote.count()).toBe(2);
    quote.update(quote.items()[0].key, 0);
    expect(quote.items()[0].quantity).toBe(10);
  });
  it('recomienda solo manteles correspondientes y oculta los ya agregados', () => {
    const quote = new QuoteService();
    quote.add(product('mesa-redonda'), 10);
    expect(quote.recommendations().map(p => p.id)).toEqual(['mantel-redondo']);
    quote.add(product('mantel-redondo'), 1);
    expect(quote.recommendations()).toEqual([]);
    quote.remove(quote.items()[1].key);
    expect(quote.recommendations()).toHaveLength(1);
    quote.remove(quote.items()[0].key);
    expect(quote.count()).toBe(0);
  });
});

describe('Conservación de la selección', () => {
  it('recupera solo productos y cantidades válidas del almacenamiento', () => {
    let saved = JSON.stringify([
      { productId: 'mesa-redonda', quantity: 10 },
      { productId: 'inexistente', quantity: 5 },
      { productId: 'silla-acojinada', quantity: -10 },
      { productId: 'silla-tiffany', quantity: 10, variantId: 'inexistente' },
    ]);
    const storage = { getItem: () => saved, setItem: (_: string, value: string) => { saved = value; } };
    const quote = new QuoteService();
    quote.restore(storage);
    expect(quote.count()).toBe(1);
    quote.add(product('silla-acojinada'), 100);
    const next = new QuoteService();
    next.restore(storage);
    expect(next.count()).toBe(2);
    expect(next.items()[1].quantity).toBe(100);
  });
  it('permite seleccionar equipo cuando el almacenamiento falla', () => {
    const quote = new QuoteService();
    quote.restore({ getItem: () => { throw new Error('denied'); }, setItem: () => { throw new Error('full'); } } as unknown as Storage);
    quote.add(product('mesa-redonda'), 10);
    expect(quote.count()).toBe(1);
  });
});
