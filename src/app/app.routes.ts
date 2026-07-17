import { Routes } from '@angular/router';
import { HomeComponent }        from './pages/home/home.component';
import { AvisoLegalComponent }  from './pages/aviso-legal/aviso-legal.component';
import { PrivacidadComponent }  from './pages/privacidad/privacidad.component';

export const routes: Routes = [
  { path: '',            component: HomeComponent },
  { path: 'aviso-legal', component: AvisoLegalComponent },
  { path: 'privacidad',  component: PrivacidadComponent },
  { path: '**',          redirectTo: '' },
];
