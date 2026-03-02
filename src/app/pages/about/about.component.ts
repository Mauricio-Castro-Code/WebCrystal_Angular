import { Component } from '@angular/core';

import { CtaCardComponent } from './components/cta-card/cta-card.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';
import { OurMisionVisionComponent } from './components/our-mision-vision/our-mision-vision.component';
import { OurPassionComponent } from './components/our-passion/our-passion.component';
import { OurValuesComponent } from './components/our-values/our-values.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    OurPassionComponent,
    OurHistoryComponent,
    OurMisionVisionComponent,
    OurValuesComponent,
    CtaCardComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
