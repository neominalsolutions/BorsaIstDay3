import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientUiRoutingModule } from './client-ui-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientLayoutComponent } from './layout/components/client-layout/client-layout.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { MenuComponent } from './layout/components/menu/menu.component';

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
  ],
  imports: [CommonModule, ClientUiRoutingModule],
})
export class ClientUIModule {}
