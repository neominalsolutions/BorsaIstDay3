import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { UserInfoDialogComponent } from './user-info-dialog/user-info-dialog.component';
import { UserListComponent } from './user-list/user-list.component';

// material ile alakalı kullanacağım modülleri eklemek için material apidan module isimlerini öğrenip geliştirme modülüne tanımlıyorum
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';

// no provider injector hatası alırsak module import edip etmemdiğimizi kontrol edelim

// sadece admin module bulunan directives,pipes,components, service buraya tanıtılıyor
// feature klasörü altındaki tüm componentleri dışarı çıkarmış olduk.

@NgModule({
  declarations: [UserCardComponent, UserInfoDialogComponent, UserListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
  ],
  exports: [UserCardComponent, UserInfoDialogComponent, UserListComponent],
})
export class AdminFeatureModule {}

//@NgModule decaratorde export ile componentler,directive,pipes diğer modeüllerden de kullanılabilir olur.
