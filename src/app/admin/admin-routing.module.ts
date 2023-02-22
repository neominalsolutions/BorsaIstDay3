import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { RolesPageComponent } from './pages/roles-page/roles-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

// kendi module ile alakalı routing işlemleri yazılıyor
const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'users',
        component: UsersPageComponent,
      },
      {
        path: 'user-detail/:id', // route params değerlerini okuyarak route üzerinden bir componenten diğer componente nasıl veri taşırız kısmını
        component: UsersPageComponent,
      },
      {
        path: 'roles',
        component: RolesPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
