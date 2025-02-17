import { Component } from '@angular/core';
import { CustomerSayingComponent } from './customer-saying/customer-saying.component';
import { ButtonsComponent } from './buttons/buttons.component';

export type Customer = {
  profilPicture: string;
  name: string;
  role: string;
  review:string;
}

@Component({
  selector: 'app-global-customer-saying',
  standalone: true,
  imports: [CustomerSayingComponent, ButtonsComponent],
  templateUrl: './global-customer-saying.component.html',
  styleUrl: './global-customer-saying.component.scss'
})
export class GlobalCustomerSayingComponent {
  
  customers: Array<Customer> = [
    {profilPicture:"Lego1", name:"EL PRIMOOOOOOOO", role:"Brawler", review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"},
    {profilPicture:"Lego2", name:"Steven", role:"Acteur", review:"Allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely Our dedicated patient engagement app and web portal"},
    {profilPicture:"Lego3", name:"Fati", role:"Fou", review:"Allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely Our dedicated patient engagement app and web portal"}
  ];

  index: number = 1 ;

  changeCustomer(incrément: number):void{
    this.index += incrément;
    if(this.index == this.customers.length) this.index = 0;
    if(this.index == -1) this.index = this.customers.length-1;
  }
}
