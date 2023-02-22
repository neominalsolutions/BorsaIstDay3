import { Component, Input, OnInit } from '@angular/core';
import { IUserInfo } from '../../models/IUserInfo';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() userInfo!: IUserInfo;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
