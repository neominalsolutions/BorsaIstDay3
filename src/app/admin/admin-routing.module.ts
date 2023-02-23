import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { RolesPageComponent } from './pages/roles-page/roles-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TodoResolver } from './pages/todo-page/todo.resolver';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';
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
        component: UserDetailPageComponent,
        data: {
          // kullanıcı tanımlı veri taşıma tekniği
          title: 'User Detail',
          permissions: ['apply-check', 'order-request-tranform'],
        },
      },
      {
        path: 'user-detail', // querystring ile gönderelim
        component: UserDetailPageComponent,
      },
      {
        path: 'roles',
        component: RolesPageComponent,
      },
      {
        path: 'todos',
        component: TodoPageComponent,
        resolve: {
          // route componentin kullanacağı resolver tanımlaması yapıyoruz
          todoview: TodoResolver, // todoview providername ile resolver üzerinden veri çekmeye hazır hale getirdil.
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
