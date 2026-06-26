import { Vehicle } from '../models/vehicle';

export const VEHICLES: Vehicle[] = [
  {
    id: '1',
    name: 'Volvo G7',
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
    name: 'Van Executiva',
    image: 'fleet/van_exec/van_exec_1.jpg',
    images: [
      'fleet/van_exec/van_exec_1.jpg',
      'fleet/van_exec/van_exec_2.jpg',
      'fleet/van_exec/van_exec_3.jpg',
      'fleet/van_exec/van_exec_4.jpg',
    ],
    description:
      'Van executiva ideal para pequenos grupos e translados.',
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
    name: 'Sprinter Executiva',
    image: 'fleet/sprinter_exec/sprinter_exec_1.jpg',
    images: [
      'fleet/sprinter_exec/sprinter_exec_1.jpg',
      'fleet/sprinter_exec/sprinter_exec_2.jpg',
      'fleet/sprinter_exec/sprinter_exec_3.jpg',
      'fleet/sprinter_exec/sprinter_exec_4.jpg',
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
    id: '4',
    name: 'Ônibus Truck',
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
    id: '5',
    name: 'Micro Ônibus Semi Leito',
    image: 'fleet/micro_semi/micro_semi_1.jpg',
    images: [
      'fleet/micro_semi/micro_semi_1.jpg',
      'fleet/micro_semi/micro_semi_2.jpg',
      'fleet/micro_semi/micro_semi_3.jpg',
      'fleet/micro_semi/micro_semi_4.jpg',
    ],
    description:
      'Micro ônibus semi leito para excursões e viagens regionais.',
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
    id: '6',
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
    year: null,
    features: [
      'Bancos reclináveis',
      'Ar-condicionado',
    ],
  },
  {
    id: '7',
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
    year: null,
    features: [
      'Ar-condicionado',
      'Bancos reclináveis',
    ],
  },
  {
    id: '8',
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
    year: null,
    features: [
      'Ônibus rodoviário',
      'Bancos reclináveis',
      'Cintos de segurança',
    ],
  },
  {
    id: '9',
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
    year: null,
    features: [
      'Ônibus rodoviário',
      'Bancos reclináveis',
      'Cintos de segurança',
    ],
  },
  {
    id: '10',
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
    year: null,
    features: [
      'Cintos de segurança',
    ],
  },
];
