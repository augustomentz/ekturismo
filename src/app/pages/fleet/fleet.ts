import { DestroyRef, Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { FleetCard } from '../../components/fleet-card/fleet-card';
import { FleetDetail } from '../../components/fleet-detail/fleet-detail';
import { travelAgencyJsonLd, vehicleJsonLd, vehicleSeo } from '../../data/seo.data';
import { findVehicleBySlug, VEHICLES } from '../../data/vehicles.data';
import { Vehicle } from '../../models/vehicle';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-fleet-page',
  imports: [FleetCard, FleetDetail],
  templateUrl: './fleet.html',
  styleUrl: './fleet.scss',
})
export class FleetPage implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);

  readonly vehicles = VEHICLES;
  readonly selectedVehicle = signal<Vehicle | null>(null);

  ngOnInit(): void {
    document.documentElement.classList.add('fleet-scroll-mode');

    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const slug = params.get('slug');

      if (!slug) {
        this.selectedVehicle.set(null);
        document.documentElement.classList.remove('modal-open');
        return;
      }

      const vehicle = findVehicleBySlug(slug);

      if (!vehicle) {
        void this.router.navigate(['/frota']);
        return;
      }

      this.selectedVehicle.set(vehicle);
      document.documentElement.classList.add('modal-open');
      this.seo.apply({
        ...vehicleSeo(vehicle),
        jsonLd: [travelAgencyJsonLd(), vehicleJsonLd(vehicle)],
      });
    });
  }

  ngOnDestroy(): void {
    document.documentElement.classList.remove('fleet-scroll-mode', 'modal-open');
  }

  openDetail(vehicle: Vehicle): void {
    void this.router.navigate(['/frota', vehicle.slug]);
  }

  closeDetail(): void {
    void this.router.navigate(['/frota']);
  }
}
