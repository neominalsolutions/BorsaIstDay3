import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientUiRoutingModule } from './client-ui-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientLayoutComponent } from './layout/components/client-layout/client-layout.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { MenuComponent } from './layout/components/menu/menu.component';
import { AdminPageModule } from '../admin/admin.module';
import { TeamsComponent } from './pages/home-page/features/teams/teams.component';
import { AdminFeatureModule } from '../admin/pages/users-page/features/admin-feature.module';

// module ile alakalı componentleri module encapsulate ettik.
// aşağıdaki componentler artık app module de yüklenemeyecek.
@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    ClientLayoutComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    TeamsComponent,
  ],
  imports: [CommonModule, ClientUiRoutingModule, AdminFeatureModule], // AdminModule circular dependency oluşturur
  // exports: [TeamsComponent],
})
export class ClientPageModule {}

// ilgili module dosyası içerisine de AdminModule import ettik artık user-list-component erişim var.
