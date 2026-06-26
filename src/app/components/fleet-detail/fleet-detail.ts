import { Component, effect, HostListener, input, output, signal } from '@angular/core';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-fleet-detail',
  imports: [],
  templateUrl: './fleet-detail.html',
  styleUrl: './fleet-detail.scss',
})
export class FleetDetail {
  readonly vehicle = input.required<Vehicle>();
  readonly closed = output<void>();

  readonly activeImageIndex = signal(0);

  constructor() {
    effect(() => {
      this.vehicle();
      this.activeImageIndex.set(0);
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closed.emit();
  }

  selectImage(index: number): void {
    this.activeImageIndex.set(index);
  }

  previousImage(): void {
    const total = this.vehicle().images.length;
    this.activeImageIndex.update((index) => (index - 1 + total) % total);
  }

  nextImage(): void {
    const total = this.vehicle().images.length;
    this.activeImageIndex.update((index) => (index + 1) % total);
  }
}
