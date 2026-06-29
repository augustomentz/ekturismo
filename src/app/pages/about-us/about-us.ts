import { Component } from '@angular/core';

interface AboutBlock {
  label: string;
  title: string;
  description: string;
  accent: string;
}

@Component({
  selector: 'app-about-us-page',
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUsPage {
  readonly blocks: AboutBlock[] = [
    {
      label: '01',
      title: 'Nossa História',
      description:
        'Uma empresa familiar que nasceu da paixão por conectar pessoas a destinos inesquecíveis.',
      accent: 'Desde o início, cada rota foi pensada com cuidado humano.',
    },
    {
      label: '02',
      title: 'Nosso Compromisso',
      description:
        'Com frota moderna e equipe dedicada, garantimos segurança, conforto e pontualidade em cada viagem.',
      accent: 'Segurança · Conforto · Pontualidade',
    },
  ];
}
