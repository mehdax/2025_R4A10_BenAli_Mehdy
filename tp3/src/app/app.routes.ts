import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GenerateVoyageComponent } from './generate-voyage/generate-voyage.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'home',
        redirectTo: '',
      },
      {
        path: '404',
        component: NotFoundPageComponent,
      },
      {
        path: '**',
        redirectTo: '404',
      },
  

];
