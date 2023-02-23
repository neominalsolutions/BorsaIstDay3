import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  spinner = new BehaviorSubject<boolean>(false);

  constructor() {}

  showLoading() {
    this.spinner.next(true);
  }

  hideLoading() {
    this.spinner.next(false);
  }
}
