import { afterNextRender, Component, ElementRef, inject, viewChild } from '@angular/core';
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

  private readonly videoRef = viewChild<ElementRef<HTMLVideoElement>>('video');
  private readonly loopDuration = 40;

  constructor() {
    afterNextRender(() => this.ensurePlaying());
  }

  onTimeUpdate(video: HTMLVideoElement): void {
    if (video.currentTime >= this.loopDuration) {
      video.currentTime = 0;
    }
  }

  private ensurePlaying(): void {
    const video = this.videoRef()?.nativeElement;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const play = (): void => {
      void video.play().catch(() => undefined);
    };

    play();
    video.addEventListener('canplay', play, { once: true });
  }
}
