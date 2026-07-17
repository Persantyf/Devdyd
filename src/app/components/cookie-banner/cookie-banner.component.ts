import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (visible) {
      <div class="cookie-banner" role="dialog" aria-label="Aviso de cookies">
        <p class="cookie-banner__text">
          Esta web usa cookies técnicas esenciales para su correcto funcionamiento.
          No recopilamos datos de análisis ni publicitarios.
          <a routerLink="/privacidad">Más información</a>
        </p>
        <div class="cookie-banner__actions">
          <button class="btn btn--primary" (click)="accept()">Aceptar</button>
        </div>
      </div>
    }
  `,
})
export class CookieBannerComponent implements OnInit {
  visible = false;

  ngOnInit() {
    this.visible = !localStorage.getItem('cookie_consent');
  }

  accept() {
    localStorage.setItem('cookie_consent', '1');
    this.visible = false;
  }
}
