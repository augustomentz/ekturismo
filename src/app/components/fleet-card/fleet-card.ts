import { Component, input, output } from '@angular/core';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-fleet-card',
  imports: [],
  templateUrl: './fleet-card.html',
  styleUrl: './fleet-card.scss',
})
export class FleetCard {
  readonly vehicle = input.required<Vehicle>();
  readonly cardIndex = input(0);
  readonly selected = input(false);
  readonly select = output<Vehicle>();
}
