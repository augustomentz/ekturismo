import { Routes } from '@angular/router';
import { ABOUT_SEO, FLEET_SEO, HOME_SEO } from './data/seo.data';
import { AboutUsPage } from './pages/about-us/about-us';
import { FleetPage } from './pages/fleet/fleet';
import { HomePage } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    data: { seo: HOME_SEO },
  },
  {
    path: 'sobre-nos',
    component: AboutUsPage,
    data: { seo: ABOUT_SEO },
  },
  {
    path: 'frota/:slug',
    component: FleetPage,
  },
  {
    path: 'frota',
    component: FleetPage,
    data: { seo: FLEET_SEO },
  },
  {
    path: 'about-us',
    redirectTo: 'sobre-nos',
    pathMatch: 'full',
  },
  {
    path: 'fleet/:slug',
    redirectTo: 'frota/:slug',
  },
  {
    path: 'fleet',
    redirectTo: 'frota',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];
