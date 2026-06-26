import { afterNextRender, Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
  private readonly loopDuration = 40;

  onTimeUpdate(video: HTMLVideoElement): void {
    if (video.currentTime >= this.loopDuration) {
      video.currentTime = 0;
    }
  }
}
