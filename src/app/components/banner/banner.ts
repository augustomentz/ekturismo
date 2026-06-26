import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteUiService } from '../../services/route-ui.service';

@Component({
  selector: 'app-banner',
  imports: [RouterLink],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner implements AfterViewInit {
  readonly routeUi = inject(RouteUiService);
  readonly videoReady = signal(false);

  private readonly videoRef = viewChild<ElementRef<HTMLVideoElement>>('video');
  private readonly loopDuration = 40;

  ngAfterViewInit(): void {
    const video = this.videoRef()?.nativeElement;

    if (!video) {
      return;
    }

    const markReady = (): void => {
      this.videoReady.set(true);
    };

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      markReady();
      return;
    }

    video.addEventListener('loadeddata', markReady, { once: true });
    video.addEventListener('canplay', markReady, { once: true });
  }

  onTimeUpdate(video: HTMLVideoElement): void {
    if (video.currentTime >= this.loopDuration) {
      video.currentTime = 0;
    }
  }
}
