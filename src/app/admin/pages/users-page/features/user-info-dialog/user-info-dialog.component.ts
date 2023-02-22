import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUserInfo } from '../../models/IUserInfo';

@Component({
  selector: 'app-user-info-dialog',
  templateUrl: './user-info-dialog.component.html',
  styleUrls: ['./user-info-dialog.component.scss'],
})
export class UserInfoDialogComponent {
  // mat-dialog MAT_DIALOG_DATA ile dialog veri yakalama işlemi yaptık
  constructor(@Inject(MAT_DIALOG_DATA) public data: IUserInfo) {}
}
