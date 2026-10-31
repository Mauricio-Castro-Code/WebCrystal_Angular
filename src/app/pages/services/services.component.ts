import { Component } from '@angular/core';

import { DeliveryInfoComponent } from '../../shared/components/delivery-info/delivery-info.component';
import { CarpasComponent } from './components/carpas/carpas.component';
import { CateringBanquetesComponent } from './components/catering-banquetes/catering-banquetes.component';
import { CtaCardComponent } from './components/cta-card/cta-card.component';
import { RentaMobiliarioComponent } from './components/renta-mobiliario/renta-mobiliario.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    DeliveryInfoComponent,
    CateringBanquetesComponent,
    RentaMobiliarioComponent,
    CarpasComponent,
    CtaCardComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {}
