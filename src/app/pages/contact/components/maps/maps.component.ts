import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact-maps',
  standalone: true,
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css',
})
export class MapsComponent {
  protected readonly mapLoaded = signal(false);

  protected loadMap(): void {
    this.mapLoaded.set(true);
  }
}
