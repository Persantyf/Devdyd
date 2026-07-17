import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { HeaderComponent }       from './components/header/header.component';
import { FooterComponent }       from './components/footer/footer.component';
import { BgLinesComponent }      from './components/bg-lines/bg-lines.component';
import { WhatsappFabComponent }  from './components/whatsapp-fab/whatsapp-fab.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';

declare const lucide: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BgLinesComponent,
    HeaderComponent,
    FooterComponent,
    WhatsappFabComponent,
    CookieBannerComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  constructor(private translate: TranslateService) {
    translate.use('es');
  }

  ngAfterViewInit() {
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}
