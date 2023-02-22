import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { RolesPageComponent } from './pages/roles-page/roles-page.component';

// sadece admin module bulunan directives,pipes,components, service buraya tanıtılıyor
@NgModule({
  declarations: [AdminLayoutComponent, UsersPageComponent, RolesPageComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
