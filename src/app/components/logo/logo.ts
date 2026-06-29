import { Component, input } from '@angular/core';
import { LOGOS, SITE } from '../../data/site.data';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo {
  readonly logos = LOGOS;
  readonly alt = SITE.name;
  readonly imgClass = input('');
  readonly width = input(300);
  readonly height = input(47);
}
