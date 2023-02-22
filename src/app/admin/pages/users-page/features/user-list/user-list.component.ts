import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserInfo } from '../../models/IUserInfo';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  @Input() users: IUserInfo[] = [];
  @Output() userSelected: EventEmitter<IUserInfo> =
    new EventEmitter<IUserInfo>();

  onSelect(user: IUserInfo) {
    // burada artık seçilen user elimizde
    // ya behaviorsubject ile bunu yaparız
    // event emitter ile bunu yaparız.
    this.userSelected.emit(user);
  }
}
