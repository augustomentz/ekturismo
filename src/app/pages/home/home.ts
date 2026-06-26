import { Component } from '@angular/core';
import { Banner } from '../../components/banner/banner';

@Component({
  selector: 'app-home-page',
  imports: [Banner],
  templateUrl: './home.html',
  styles: `
    :host {
      display: flex;
      flex: 1;
      flex-direction: column;
      min-height: 0;
    }
  `,
})
export class HomePage {}
