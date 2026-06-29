import { Vehicle } from '../models/vehicle';
import { SITE } from './site.data';

export interface SeoRouteData {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export const HOME_SEO: SeoRouteData = {
  title: 'EK Turismo | Transporte, turismo e fretamento',
  description:
    'EK Turismo — empresa familiar desde 2000. Transporte, turismo e fretamento com frota moderna, conforto e segurança no Rio Grande do Sul.',
  path: '/',
};

export const ABOUT_SEO: SeoRouteData = {
  title: 'Sobre nós | EK Turismo',
  description:
    'Conheça a EK Turismo: empresa familiar fundada em 2000, especializada em turismo, transporte e fretamento com frota moderna e equipe dedicada.',
  path: '/about-us',
};

export const FLEET_SEO: SeoRouteData = {
  title: 'Frota | EK Turismo',
  description:
    'Conheça a frota da EK Turismo: ônibus leito, micro ônibus, vans e sprinters para excursões, fretamento e viagens corporativas.',
  path: '/fleet',
};

export function vehicleSeo(vehicle: Vehicle): SeoRouteData {
  return {
    title: `${vehicle.name} | Frota | EK Turismo`,
    description: vehicle.description,
    path: `/fleet/${vehicle.slug}`,
    image: vehicle.image,
  };
}

export function travelAgencyJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: SITE.name,
    url: SITE.url,
    telephone: '+55-51-99643-3110',
    sameAs: ['https://www.instagram.com/ekturismo_/'],
    description: HOME_SEO.description,
    foundingDate: '2000',
    areaServed: {
      '@type': 'State',
      name: 'Rio Grande do Sul',
    },
  };
}

export function vehicleJsonLd(vehicle: Vehicle): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: vehicle.name,
    description: vehicle.longDescription,
    image: vehicle.images.map((image) => absoluteAssetUrl(image)),
    brand: {
      '@type': 'Brand',
      name: SITE.name,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'TravelAgency',
        name: SITE.name,
        url: SITE.url,
      },
    },
  };
}

export function absoluteAssetUrl(path: string): string {
  const normalized = path.replace(/^\//, '');
  return `${SITE.url}/${normalized}`;
}

export function pageUrl(path: string): string {
  return path === '/' ? SITE.url : `${SITE.url}${path}`;
}
