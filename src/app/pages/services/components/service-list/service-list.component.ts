import { Component, Input } from '@angular/core';

import { ServiceItem } from '../../../../shared/interfaces/service-item.interface';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css',
})
export class ServiceListComponent {
  @Input() services: readonly ServiceItem[] = [];
}
