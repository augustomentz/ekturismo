import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouteUiService } from '../../services/route-ui.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly routeUi = inject(RouteUiService);
  readonly theme = inject(ThemeService);
}
