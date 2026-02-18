import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SeoService } from './core/services/seo.service';
import { ButtonCotizarComponent } from './shared/components/button-cotizar/button-cotizar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ButtonCotizarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly router = inject(Router);
  private readonly seoService = inject(SeoService);

  constructor() {
    this.seoService.init();
  }

  protected get isInicioRoute(): boolean {
    return (
      this.router.url === '/' ||
      this.router.url === '/inicio' ||
      this.router.url === '/home' ||
      this.router.url.startsWith('/inicio?') ||
      this.router.url.startsWith('/inicio#') ||
      this.router.url.startsWith('/home?') ||
      this.router.url.startsWith('/home#')
    );
  }
}
