import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('accessToken');

    console.log('token-req', request);

    if (token != undefined) {
      // request de bir değişiklik yaptık
      const req = request.clone({
        headers: request.headers.append('Authorization', `Bearer ${token}`),
      });
      // api access token gönderme yöntemi
      // append headerda var olan değerler üzerine yeni bir değer ekle
      // set dersek header dahi tüm değer yeni gönderdiğimiz değere göre yeniden atanır.
      return next.handle(req);
    }

    return next.handle(request);
  }
}
