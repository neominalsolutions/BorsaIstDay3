import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/layout/admin-layout/admin-layout.component';
import { RolesPageComponent } from './admin/pages/roles-page/roles-page.component';
import { UsersPageComponent } from './admin/pages/users-page/users-page.component';
import { ClientLayoutComponent } from './client-ui/layout/components/client-layout/client-layout.component';
import { AboutPageComponent } from './client-ui/pages/about-page/about-page.component';
import { HomePageComponent } from './client-ui/pages/home-page/home-page.component';

// route config dosyası
const routes: Routes = [
  // ayrı bir module linki
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      // nested route
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
      },
    ],
  },
  // ayrı bir module layout linki
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'users',
        component: UsersPageComponent,
      },
      {
        path: 'roles',
        component: RolesPageComponent,
      },
    ],
  },
  // {
  //   path: 'home',
  //   component: HomePageComponent,
  // },
  // {
  //   path: 'about',
  //   component: AboutPageComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
