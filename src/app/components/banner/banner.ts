import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteUiService } from '../../services/route-ui.service';

@Component({
  selector: 'app-banner',
  imports: [RouterLink],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
  readonly routeUi = inject(RouteUiService);
  private readonly loopDuration = 40;

  onTimeUpdate(video: HTMLVideoElement): void {
    if (video.currentTime >= this.loopDuration) {
      video.currentTime = 0;
    }
  }
}
