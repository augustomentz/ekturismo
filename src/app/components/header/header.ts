import { Component, HostListener, inject, OnDestroy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from '../logo/logo';
import { RouteUiService } from '../../services/route-ui.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Logo],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {
  readonly routeUi = inject(RouteUiService);
  readonly theme = inject(ThemeService);

  readonly menuOpen = signal(false);

  toggleMenu(): void {
    const next = !this.menuOpen();
    this.menuOpen.set(next);
    document.documentElement.classList.toggle('nav-menu-open', next);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.documentElement.classList.remove('nav-menu-open');
  }

  navigate(url: string): void {
    this.routeUi.anticipate(url);
    this.closeMenu();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen()) {
      this.closeMenu();
    }
  }

  ngOnDestroy(): void {
    document.documentElement.classList.remove('nav-menu-open');
  }
}
