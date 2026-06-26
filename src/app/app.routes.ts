import { Routes } from '@angular/router';
import { AboutUsPage } from './pages/about-us/about-us';
import { FleetPage } from './pages/fleet/fleet';
import { HomePage } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about-us', component: AboutUsPage },
  { path: 'fleet', component: FleetPage },
  { path: '**', redirectTo: '' },
];
