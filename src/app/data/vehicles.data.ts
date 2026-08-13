import { Vehicle } from '../models/vehicle';

export const VEHICLES: Vehicle[] = [
  {
    id: '1',
    slug: 'volvo-g7',
    name: 'Volvo G7 2012',
    image: 'fleet/volvo_g7/volvo_g7_1.jpg',
    images: [
      'fleet/volvo_g7/volvo_g7_1.jpg',
      'fleet/volvo_g7/volvo_g7_2.jpg',
      'fleet/volvo_g7/volvo_g7_3.jpg',
      'fleet/volvo_g7/volvo_g7_4.jpg',
    ],
    description:
      'Ônibus leito turismo de alto padrão para viagens de longa distância.',
    longDescription:
      'O Volvo G7 2012 oferece uma experiência premium para excursões, viagens corporativas e turismo. Conta com poltronas leito turismo, climatização completa, banheiro, Wi-Fi e diversas comodidades para garantir conforto durante todo o percurso.',
    capacity: 42,
    year: 2012,
    features: [
      'Leito Turismo',
      'Ar-condicionado e calefação',
      'Apoio de pernas',
      'Banheiro',
      'Wi-Fi e USB',
      'Monitores para DVD',
      'Geladeira e cafeteira',
    ],
  },
  {
    id: '2',
    slug: 'van-executiva',
    name: 'Van Executiva 2026',
    image: 'fleet/van_exec/van_exec_1.jpg',
    images: [
      'fleet/van_exec/van_exec_1.jpg',
      'fleet/van_exec/van_exec_2.jpg',
      'fleet/van_exec/van_exec_3.jpg',
      'fleet/van_exec/van_exec_4.jpg',
      'fleet/van_exec/van_exec_5.jpg',
    ],
    description:
      'Van Executiva com excelente conforto para viagens e fretamentos.',
    longDescription:
      'A Van Executiva 2026 é indicada para viagens executivas, receptivos e traslados, oferecendo conforto e tecnologia para grupos reduzidos.',
    capacity: 15,
    year: 2026,
    features: [
      'Bancos reclináveis',
      'USB e carregador turbo',
      'TV e monitor para DVD',
      'Ar-condicionado',
      'Porta automática',
    ],
  },
  { 
    id: '3',
    slug: 'spin-2018',
    name: 'Spin 2018',
    image: 'fleet/spin_2018/spin_1.jpg',
    images: [
      'fleet/spin_2018/spin_1.jpg',
      'fleet/spin_2018/spin_2.jpg',
      'fleet/spin_2018/spin_3.jpg',
      'fleet/spin_2018/spin_4.jpg',
      'fleet/spin_2018/spin_5.jpg',
    ],
    description:
      'Spin 2018 com excelente conforto para viagens e fretamentos.',
    longDescription:
      'A Spin 2018 é indicada para viagens executivas, receptivos e traslados, oferecendo conforto e tecnologia para grupos reduzidos.',
    capacity: 5,
    year: 2018,
    features: [
      'Ar-condicionado',
      'Bagageiro Grande'
    ],
  },
  {
    id: '4',
    slug: 'sprinter-executiva',
    name: 'Sprinter Executiva 2017',
    image: 'fleet/sprinter_exec/sprinter_exec_1.jpg',
    images: [
      'fleet/sprinter_exec/sprinter_exec_1.jpg',
      'fleet/sprinter_exec/sprinter_exec_2.jpg',
      'fleet/sprinter_exec/sprinter_exec_3.jpg',
      'fleet/sprinter_exec/sprinter_exec_4.jpg',
      'fleet/sprinter_exec/sprinter_exec_5.jpg',
      'fleet/sprinter_exec/sprinter_exec_6.jpg',
    ],
    description:
      'Sprinter executiva com excelente conforto para viagens e fretamentos.',
    longDescription:
      'A Sprinter Executiva 2017 oferece amplo espaço interno e equipamentos que tornam a viagem mais confortável para grupos de até 16 passageiros.',
    capacity: 16,
    year: 2017,
    features: [
      'Bancos reclináveis',
      'Tomadas e monitor para DVD',
      'Geladeira',
      'Porta automática',
      'Ar-condicionado',
    ],
  },
  {
    id: '5',
    slug: 'onibus-truck',
    name: 'Ônibus Truck 2004',
    image: 'fleet/truck_2004/truck_2004_1.jpg',
    images: [
      'fleet/truck_2004/truck_2004_1.jpg',
      'fleet/truck_2004/truck_2004_2.jpg',
      'fleet/truck_2004/truck_2004_3.jpg',
      'fleet/truck_2004/truck_2004_4.jpg',
    ],
    description:
      'Ônibus rodoviário para viagens e excursões.',
    longDescription:
      'Modelo robusto destinado ao transporte rodoviário, equipado para proporcionar conforto em viagens de média e longa distância.',
    capacity: 42,
    year: 2004,
    features: [
      'Banheiro',
      'Ar-condicionado',
      'Leito com apoio de pernas',
      'Cafeteira e geladeira',
      'Monitor para DVD',
    ],
  },
  {
    id: '6',
    slug: 'micro-onibus-semi-leito',
    name: 'Micro Ônibus Semi Leito 2014',
    image: 'fleet/micro_semi/micro_semi_1.jpg',
    images: [
      'fleet/micro_semi/micro_semi_1.jpg',
      'fleet/micro_semi/micro_semi_2.jpg',
      'fleet/micro_semi/micro_semi_3.jpg',
      'fleet/micro_semi/micro_semi_4.jpg',
      'fleet/micro_semi/micro_semi_5.jpg',
    ],
    description:
      'Micro ônibus semi leito para excursões e viagens.',
    longDescription:
      'Ideal para grupos médios, oferecendo conforto com poltronas semi leito, climatização e estrutura completa para passeios e turismo.',
    capacity: 24,
    year: 2014,
    features: [
      'Ar-condicionado',
      'Banheiro',
      'Geladeira e cafeteira',
      'Wi-Fi e monitores para DVD',
    ],
  },
  {
    id: '7',
    slug: 'sprinter-03',
    name: 'Sprinter 03',
    image: 'fleet/sprinter/sprinter_1.jpg',
    images: [
      'fleet/sprinter/sprinter_1.jpg',
      'fleet/sprinter/sprinter_2.jpg',
      'fleet/sprinter/sprinter_3.jpg',
      'fleet/sprinter/sprinter_4.jpg',
    ],
    description:
      'Sprinter confortável para pequenos grupos.',
    longDescription:
      'Indicada para fretamentos, viagens corporativas e traslados, oferecendo conforto e praticidade.',
    capacity: 15,
    year: '03',
    features: [
      'Bancos reclináveis',
      'Ar-condicionado',
    ],
  },
  {
    id: '8',
    slug: 'micro-onibus-05',
    name: 'Micro Ônibus 05',
    image: 'fleet/micro_05/micro_05_1.jpg',
    images: [
      'fleet/micro_05/micro_05_1.jpg',
      'fleet/micro_05/micro_05_2.jpg',
      'fleet/micro_05/micro_05_3.jpg',
      'fleet/micro_05/micro_05_4.jpg',
    ],
    description:
      'Micro ônibus para turismo regional e transporte de grupos.',
    longDescription:
      'Veículo compacto que alia conforto e praticidade para passeios, excursões e viagens de curta distância.',
    capacity: 27,
    year: '05',
    features: [
      'Ar-condicionado',
      'Bancos reclináveis',
    ],
  },
  {
    id: '9',
    slug: 'onibus-busscar-01',
    name: 'Ônibus Busscar 01',
    image: 'fleet/busscar/busscar_1.jpg',
    images: [
      'fleet/busscar/busscar_1.jpg',
      'fleet/busscar/busscar_2.jpg',
      'fleet/busscar/busscar_3.jpg',
      'fleet/busscar/busscar_4.jpg',
    ],
    description:
      'Ônibus rodoviário confortável para viagens e excursões.',
    longDescription:
      'Modelo Busscar com grande capacidade de passageiros, ideal para viagens rodoviárias, fretamentos e turismo.',
    capacity: 48,
    year: '01',
    features: [
      'Ônibus rodoviário',
      'Bancos reclináveis',
      'Cintos de segurança',
    ],
  },
  {
    id: '10',
    slug: 'onibus-viale-04',
    name: 'Ônibus Viale 04',
    image: 'fleet/viale/viale_1.jpg',
    images: [
      'fleet/viale/viale_1.jpg',
      'fleet/viale/viale_2.jpg',
      'fleet/viale/viale_3.jpg',
      'fleet/viale/viale_4.jpg',
    ],
    description:
      'Ônibus rodoviário para grupos de médio porte.',
    longDescription:
      'Veículo confortável e seguro para excursões, turismo e fretamentos em geral.',
    capacity: 45,
    year: '04',
    features: [
      'Ônibus rodoviário',
      'Bancos reclináveis',
      'Cintos de segurança',
    ],
  },
  {
    id: '11',
    slug: 'onibus-escolar-02',
    name: 'Ônibus Escolar 02',
    image: 'fleet/escolar/escolar_1.jpg',
    images: [
      'fleet/escolar/escolar_1.jpg',
      'fleet/escolar/escolar_2.jpg',
      'fleet/escolar/escolar_3.jpg',
      'fleet/escolar/escolar_4.jpg',
    ],
    description:
      'Ônibus destinado ao transporte escolar e grupos.',
    longDescription:
      'Veículo com grande capacidade de passageiros e cintos de segurança, indicado para transporte escolar e serviços especiais.',
    capacity: 49,
    year: '02',
    features: [
      'Cintos de segurança',
    ],
  },
];

export function findVehicleBySlug(slug: string): Vehicle | undefined {
  return VEHICLES.find((vehicle) => vehicle.slug === slug);
}
