import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './services.component.html',
})
export class ServicesComponent {}
