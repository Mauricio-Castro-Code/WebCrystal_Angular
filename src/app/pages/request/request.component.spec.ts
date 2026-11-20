// @vitest-environment node
import '@angular/compiler';
import { Injector, runInInjectionContext } from '@angular/core';
import { SiteMetadataService } from '../../core/services/site-metadata.service';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { RequestComponent } from './request.component';
import { QuoteService } from '../../core/quote/quote.service';
import { CATALOG_PRODUCTS } from '../catalog/data/catalog-products.data';

class RequestHarness extends RequestComponent {
  readonly fields = this.form;
  readonly submit = () => this.send();
}
function setup() {
  const injector = Injector.create({ providers: [QuoteService, SiteMetadataService] });
  const component = runInInjectionContext(injector, () => new RequestHarness());
  const quote = injector.get(QuoteService);
  quote.add(CATALOG_PRODUCTS.find(p => p.id === 'mesa-redonda')!, 10);
  component.fields.setValue({ name: 'Ana Pérez', eventDate: '2026-12-12', delivery: 'delivery', fromDate: '2026-12-11', toDate: '2026-12-13', street: 'Calle 1', number: '20', district: 'Centro', city: 'Puebla', mounting: true, comments: 'Acceso & horario' });
  return { component, quote };
}
describe('Solicitud por WhatsApp', () => {
  beforeEach(() => vi.stubGlobal('window', { open: vi.fn() }));
  afterEach(() => vi.unstubAllGlobals());
  it('no abre WhatsApp cuando ya no hay equipo', () => {
    const { component, quote } = setup();
    quote.remove(quote.items()[0].key);
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    component.submit();
    expect(open).not.toHaveBeenCalled();
    open.mockRestore();
  });
  it('incluye equipo, datos y montaje en un mensaje codificado sin vaciar la selección', () => {
    const { component, quote } = setup();
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    component.submit();
    const url = new URL(String(open.mock.calls[0][0]));
    expect(url.hostname).toBe('wa.me');
    const message = url.searchParams.get('text');
    expect(message).toContain('10 × Mesa Redonda');
    expect(message).toContain('Ana Pérez');
    expect(message).toContain('12/12/2026');
    expect(message).toContain('Solicito montaje: Sí');
    expect(message).toContain('Acceso & horario');
    expect(quote.count()).toBe(1);
    open.mockRestore();
  });
  it('impide envío con fechas incoherentes o nombre vacío', () => {
    const { component } = setup();
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    component.fields.patchValue({ fromDate: '2026-12-14' });
    component.submit();
    expect(open).not.toHaveBeenCalled();
    component.fields.patchValue({ fromDate: '2026-12-11', name: '   ' });
    component.submit();
    expect(open).not.toHaveBeenCalled();
    open.mockRestore();
  });
  it('usa retiro y devolución para clientes que pasan al local', () => {
    const { component } = setup();
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    component.fields.patchValue({ delivery: 'pickup' });
    component.submit();
    const message = new URL(String(open.mock.calls[0][0])).searchParams.get('text');
    expect(message).toContain('Retiro en local: 11/12/2026');
    expect(message).toContain('Devolución: 13/12/2026');
    open.mockRestore();
  });
});
