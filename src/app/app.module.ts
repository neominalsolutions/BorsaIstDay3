import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './client-ui/pages/about-page/about-page.component';
import { HomePageComponent } from './client-ui/pages/home-page/home-page.component';
import { HeaderComponent } from './client-ui/layout/components/header/header.component';
import { FooterComponent } from './client-ui/layout/components/footer/footer.component';
import { MenuComponent } from './client-ui/layout/components/menu/menu.component';
import { ClientLayoutComponent } from './client-ui/layout/components/client-layout/client-layout.component';
import { AdminLayoutComponent } from './admin/layout/admin-layout/admin-layout.component';
import { UsersPageComponent } from './admin/pages/users-page/users-page.component';
import { RolesPageComponent } from './admin/pages/roles-page/roles-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, AboutPageComponent, HeaderComponent, FooterComponent, MenuComponent, ClientLayoutComponent, AdminLayoutComponent, UsersPageComponent, RolesPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
