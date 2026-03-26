import { afterNextRender, Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class App {
  constructor() {
    inject(ThemeService); // initialize theme (applies .dark class before page is visible)
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      afterNextRender(() => {
        document.documentElement.style.visibility = '';
      });
    }
  }
}
