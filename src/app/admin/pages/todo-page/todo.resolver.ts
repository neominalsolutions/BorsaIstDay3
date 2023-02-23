import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { debounceTime, delay, forkJoin, map, Observable, of } from 'rxjs';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

export interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}

export interface IUser {
  id: number;
  name: string;
  emaiil: string;
}

export interface ITodoViewModel {
  users: IUser[];
  todos: ITodo[];
}

@Injectable({
  providedIn: 'root',
})
export class TodoResolver implements Resolve<ITodoViewModel> {
  constructor(private http: HttpClient, private spinner: SpinnerService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ITodoViewModel> {
    // resolver da veri çekerken loading çıkar
    // this.spinner.showLoading();
    // resolver component bazlı sayfa componentleri için kullanılan bir mekanizma

    return forkJoin({
      todos: this.http.get<ITodo[]>(
        'https://jsonplaceholder.typicode.com/todos'
      ),
      users: this.http.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      ),
    }).pipe(
      delay(100),
      map((data) => {
        console.log('join-data', data);
        // veri çekildiğinde hide loading yap
        // this.spinner.hideLoading();
        return data;
      })
    );
  }
}
