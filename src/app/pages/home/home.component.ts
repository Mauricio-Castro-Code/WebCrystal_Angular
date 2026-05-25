import { Component, OnInit, inject } from '@angular/core';

import { JsonLdService } from '../../core/services/json-ld.service';
import { BarraConfianzaComponent } from './components/barra-confianza/barra-confianza.component';
import { ConveniosComponent } from './components/convenios/convenios.component';
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
    ConveniosComponent,
    FaqComponent,
    TestimonialsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly jsonLd = inject(JsonLdService);

  ngOnInit(): void {
    this.jsonLd.setSchema('faq-home', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo puedo hacer un pedido de renta de mobiliario?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Para realizar un pedido, envíanos un mensaje por WhatsApp. Nuestro equipo te solicitará la información necesaria para elaborar el contrato. No es necesario visitar nuestra tienda física.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuál es el método de entrega del mobiliario rentado?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ofrecemos dos opciones: recolección en el local sin costo adicional, o entrega a domicilio con costo de flete calculado según la distancia del envío redondo.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué documentos necesito para rentar mobiliario?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Si es tu primera vez rentando con nosotros necesitarás: INE (identificación oficial vigente) y comprobante domiciliario reciente (no mayor a 3 meses).',
          },
        },
        {
          '@type': 'Question',
          name: '¿Con cuánto tiempo de anticipación debo reservar el mobiliario?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Te recomendamos realizar tu pedido con al menos 5 días de anticipación. En temporadas altas, lo ideal es reservar con 1 a 2 semanas de anticipación para garantizar disponibilidad.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué métodos de pago aceptan para la renta de mobiliario?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aceptamos transferencias bancarias, depósitos bancarios, pagos con tarjeta en el local y efectivo al momento de entrega.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué pasa si entrego el material dañado?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nuestro equipo revisa el material durante la recolección. Si se detectan daños, se calculará un costo de reparación. Si el daño es irreparable, se procederá a la reposición del costo total del material.',
          },
        },
      ],
    });
  }
}
