import { QuoteService } from '../../core/quote/quote.service';
import { afterNextRender, Component, effect, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  protected readonly quote = inject(QuoteService);
  constructor() {
    effect(onCleanup => {
      if (!this.quote.announcement()) return;
      const timeout = setTimeout(() => this.quote.announcement.set(''), 3500);
      onCleanup(() => clearTimeout(timeout));
    });
    afterNextRender(() => {
      try { this.quote.restore(localStorage); } catch { /* Browser storage is optional. */ }
    });
  }
  @Input() overlay = false;
  protected menuOpen = false;

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }
}
