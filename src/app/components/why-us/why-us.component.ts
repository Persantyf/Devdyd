import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './why-us.component.html',
})
export class WhyUsComponent {}
