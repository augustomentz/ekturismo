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
    path: 'about-us',
    component: AboutUsPage,
    data: { seo: ABOUT_SEO },
  },
  {
    path: 'fleet/:slug',
    component: FleetPage,
  },
  {
    path: 'fleet',
    component: FleetPage,
    data: { seo: FLEET_SEO },
  },
  { path: '**', redirectTo: '' },
];
