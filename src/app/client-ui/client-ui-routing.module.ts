import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuthenticatedGuard from '../shared/guards/authenticated.guard';
import { ClientLayoutComponent } from './layout/components/client-layout/client-layout.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'about',
        component: AboutPageComponent,
        canActivate: [AuthenticatedGuard], // sadece kimlik doğrumalası yapanlar girebilsin.
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // lazy loading feature module kullanırsak bu durumda child routeları okumak için forRoot forChild methodunu kullanırız.
  exports: [RouterModule],
})
export class ClientUiRoutingModule {}
