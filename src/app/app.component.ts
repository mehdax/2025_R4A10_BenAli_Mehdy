import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { VirtualHearthComponent } from '../virtual-hearth/virtual-hearth.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { GlobalCustomerSayingComponent } from './global-customer-saying/global-customer-saying.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,VirtualHearthComponent,OurServicesComponent,GlobalCustomerSayingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'benali-angular';
}
