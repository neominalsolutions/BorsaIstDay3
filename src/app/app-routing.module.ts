import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './client-ui/pages/not-found/not-found.component';
import { UnauthorizedPageComponent } from './client-ui/pages/unauthorized-page/unauthorized-page.component';
import AuthenticatedGuard from './shared/guards/authenticated.guard';

// Alt+Shift+O gereksiz referans temizler

// route config dosyası
const routes: Routes = [
  // ayrı bir module linki
  // {
  //   path: '',
  //   component: ClientLayoutComponent,
  //   children: [
  //     // nested route
  //     {
  //       path: '',
  //       component: HomePageComponent,
  //     },
  //     {
  //       path: 'home',
  //       component: HomePageComponent,
  //     },
  //     {
  //       path: 'about',
  //       component: AboutPageComponent,
  //     },
  //   ],
  // },
  // ayrı bir module layout linki
  // {
  //   path: 'admin',
  //   component: AdminLayoutComponent,
  //   children: [
  //     {
  //       path: 'users',
  //       component: UsersPageComponent,
  //     },
  //     {
  //       path: 'roles',
  //       component: RolesPageComponent,
  //     },
  //   ],
  // },
  {
    path: '',
    loadChildren: () =>
      import('./client-ui/client-ui.module').then((m) => m.ClientPageModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminPageModule),
    canActivate: [AuthenticatedGuard], // admin sayfalarına girebilmek için kimlik doğrulama lazım
  },
  {
    path: 'unauthorized',
    component: UnauthorizedPageComponent,
  },
  {
    path: '**', // dosyanın en sonunda uygulamada olmayan linkler çağırıldığında tetiklenir
    component: NotFoundComponent,
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
