import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FleetCard } from '../../components/fleet-card/fleet-card';
import { FleetDetail } from '../../components/fleet-detail/fleet-detail';
import { VEHICLES } from '../../data/vehicles.data';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-fleet-page',
  imports: [FleetCard, FleetDetail],
  templateUrl: './fleet.html',
  styleUrl: './fleet.scss',
})
export class FleetPage implements OnInit, OnDestroy {
  readonly vehicles = VEHICLES;
  readonly selectedVehicle = signal<Vehicle | null>(null);

  ngOnInit(): void {
    document.documentElement.classList.add('fleet-scroll-mode');
  }

  ngOnDestroy(): void {
    document.documentElement.classList.remove('fleet-scroll-mode', 'modal-open');
  }

  openDetail(vehicle: Vehicle): void {
    this.selectedVehicle.set(vehicle);
    document.documentElement.classList.add('modal-open');
  }

  closeDetail(): void {
    this.selectedVehicle.set(null);
    document.documentElement.classList.remove('modal-open');
  }
}
