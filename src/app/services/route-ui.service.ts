import { computed, DestroyRef, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RouteUiService {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly url = signal(this.router.url);

  readonly isHome = computed(() => this.isHomePath(this.url()));

  constructor() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationStart | NavigationEnd | NavigationCancel | NavigationError =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError,
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => {
        if (event instanceof NavigationCancel || event instanceof NavigationError) {
          this.url.set(this.router.url);
          return;
        }

        this.url.set(event.url);
      });
  }

  anticipate(url: string): void {
    this.url.set(url);
  }

  private isHomePath(url: string): boolean {
    const path = url.split('?')[0].split('#')[0];
    return path === '' || path === '/';
  }
}
