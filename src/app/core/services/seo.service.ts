import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface SeoRouteData {
  readonly description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly siteOrigin = 'https://alquiladoracrystal.com';
  private readonly defaultTitle = 'Alquiladora Crystal | Renta de Mobiliario en Puebla';
  private readonly defaultDescription =
    'Renta de mobiliario para eventos en Puebla con asesoria personalizada, montaje profesional y catalogo premium.';

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  init(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.applyCurrentRouteTags());

    this.applyCurrentRouteTags();
  }

  private applyCurrentRouteTags(): void {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const routeTitle = route.snapshot.title;
    const routeData = route.snapshot.data as SeoRouteData;
    const title = routeTitle ?? this.defaultTitle;
    const description = routeData.description ?? this.defaultDescription;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    const canonical = this.updateCanonicalUrl();
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ name: 'twitter:url', content: canonical });
  }

  private updateCanonicalUrl(): string {
    const path = this.router.url.split(/[?#]/)[0] || '/';
    const href = `${this.siteOrigin}${path}`;

    let link = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', href);
    return href;
  }
}
