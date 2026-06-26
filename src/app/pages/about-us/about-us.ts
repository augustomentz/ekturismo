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
      title: 'Nossa Origem',
      description:
        'A EK Turismo foi fundada em 2000 pelo Sr. Ademir Kern, com o compromisso de oferecer transporte seguro e de qualidade.',
      accent: '2000 · 26 anos de experiência',
    },
    {
      label: '03',
      title: 'Nosso Compromisso',
      description:
        'Com frota moderna e equipe dedicada, garantimos segurança, conforto e pontualidade em cada viagem.',
      accent: 'Segurança · Conforto · Pontualidade',
    },
  ];
}
