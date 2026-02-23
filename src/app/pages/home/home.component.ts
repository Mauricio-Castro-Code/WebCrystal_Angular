import { Component } from '@angular/core';

import { BarraConfianzaComponent } from './components/barra-confianza/barra-confianza.component';
import { FaqComponent } from './components/faq/faq.component';
import { HeroComponent } from './components/hero/hero.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    OurServicesComponent,
    BarraConfianzaComponent,
    FaqComponent,
    TestimonialsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
