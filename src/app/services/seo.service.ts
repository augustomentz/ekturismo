import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SeoRouteData, absoluteAssetUrl, pageUrl, travelAgencyJsonLd } from '../data/seo.data';
import { SITE } from '../data/site.data';

export interface SeoConfig extends SeoRouteData {
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  private readonly jsonLdScriptId = 'ek-json-ld';

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.syncFromRoute());
  }

  apply(config: SeoConfig): void {
    const pageUrlValue = pageUrl(config.path);
    const imagePath = config.image ?? SITE.defaultOgImage;
    const imageUrl = absoluteAssetUrl(imagePath);

    this.title.setTitle(config.title);
    this.upsertMeta('name', 'description', config.description);
    this.upsertMeta('property', 'og:title', config.title);
    this.upsertMeta('property', 'og:description', config.description);
    this.upsertMeta('property', 'og:type', 'website');
    this.upsertMeta('property', 'og:url', pageUrlValue);
    this.upsertMeta('property', 'og:image', imageUrl);
    this.upsertMeta('property', 'og:locale', SITE.locale);
    this.upsertMeta('property', 'og:site_name', SITE.name);
    this.upsertMeta('name', 'twitter:card', 'summary_large_image');
    this.upsertMeta('name', 'twitter:title', config.title);
    this.upsertMeta('name', 'twitter:description', config.description);
    this.upsertMeta('name', 'twitter:image', imageUrl);

    this.setCanonical(pageUrlValue);

    const jsonLd = config.jsonLd ?? travelAgencyJsonLd();
    this.setJsonLd(jsonLd);
  }

  private syncFromRoute(): void {
    const route = this.getDeepestRoute(this.router.routerState.root);
    const seo = route.snapshot.data['seo'] as SeoRouteData | undefined;

    if (seo) {
      this.apply(seo);
    }
  }

  private getDeepestRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  private upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
    const selector = `${attr}="${key}"`;
    const tag = { [attr]: key, content };

    if (this.meta.getTag(selector)) {
      this.meta.updateTag(tag, selector);
    } else {
      this.meta.addTag(tag);
    }
  }

  private setCanonical(url: string): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private setJsonLd(data: Record<string, unknown> | Record<string, unknown>[]): void {
    const head = this.document.head;
    let script = head.querySelector<HTMLScriptElement>(`script#${this.jsonLdScriptId}`);

    if (!script) {
      script = this.document.createElement('script');
      script.id = this.jsonLdScriptId;
      script.type = 'application/ld+json';
      head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
  }
}
