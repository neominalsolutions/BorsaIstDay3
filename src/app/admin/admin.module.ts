import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { RolesPageComponent } from './pages/roles-page/roles-page.component';
import { AdminFeatureModule } from './pages/users-page/features/admin-feature.module';
import { SharedModule } from '../shared/shared.module';

// Lazy Module içerisinde bu yöntemde sadece Page Componentleri bırakıyoruz.
@NgModule({
  declarations: [
    AdminLayoutComponent,
    UsersPageComponent,
    RolesPageComponent,
    // UserCardComponent,
    // UserListComponent,
    // UserInfoDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminFeatureModule, // Admin ait Feature Componentleri AdminFeature Module üzerinden kullandık
    // ClientUIModule, circular dependency oluşturur
    SharedModule, // Artık uygulamanın beslendiği bir module mekanizması var.
  ],
  providers: [],
  // exports: [UserListComponent], // ilgili module içindeki component dışarı çıkarılır
})
export class AdminPageModule {}
