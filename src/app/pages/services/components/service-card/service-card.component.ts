import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ServiceItem } from '../../../../shared/interfaces/service-item.interface';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css',
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceItem;
}
