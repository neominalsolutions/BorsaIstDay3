import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { RolesPageComponent } from './pages/roles-page/roles-page.component';
import { UserCardComponent } from './pages/users-page/features/user-card/user-card.component';
// material ile alakalı kullanacağım modülleri eklemek için material apidan module isimlerini öğrenip geliştirme modülüne tanımlıyorum
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { UserListComponent } from './pages/users-page/features/user-list/user-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { UserInfoDialogComponent } from './pages/users-page/features/user-info-dialog/user-info-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
// no provider injector hatası alırsak module import edip etmemdiğimizi kontrol edelim

// sadece admin module bulunan directives,pipes,components, service buraya tanıtılıyor
@NgModule({
  declarations: [
    AdminLayoutComponent,
    UsersPageComponent,
    RolesPageComponent,
    UserCardComponent,
    UserListComponent,
    UserInfoDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
  ],
  entryComponents: [UserInfoDialogComponent],
  providers: [],
})
export class AdminModule {}
