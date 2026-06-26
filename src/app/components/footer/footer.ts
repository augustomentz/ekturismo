import { Component } from '@angular/core';
import { CONTACT } from '../../data/contact.data';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly contact = CONTACT;
}
