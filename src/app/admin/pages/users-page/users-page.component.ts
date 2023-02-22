import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { UserInfoDialogComponent } from './features/user-info-dialog/user-info-dialog.component';
import { IUserInfo } from './models/IUserInfo';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  usersMock$!: Observable<IUserInfo[]>;
  users!: IUserInfo[];
  selectedUser!: IUserInfo;
  dialogRef!: MatDialogRef<UserInfoDialogComponent>;

  // MatDialog angular material dialog açmamızı sağlayan servis
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.usersMock$ = of([
      { name: 'ali', username: 'ali.can', email: 'ali@test.com' },
      { name: 'ayşe', username: 'ayşe.can', email: 'ayşe@test.com' },
    ]);

    this.usersMock$.subscribe({
      next: (data: any) => {
        this.users = [...data];
      },
    });
  }

  onUserSelect(userInfo: IUserInfo) {
    this.selectedUser = { ...userInfo };

    // dialog open ederken hangi dialog ref ile çalışıyorsak onu dialog'u close edebilmek için dialogref değerine ihtiyacımız var.
    this.dialogRef = this.dialog.open(UserInfoDialogComponent, {
      width: '250px',
      enterAnimationDuration: 100,
      exitAnimationDuration: 100,
      data: this.selectedUser,
    });

    // this.dialogRef.close();
  }

  onCloseDialog() {
    // dialogRef üzerinden close edebildik.
    this.dialogRef.close();
  }
}
