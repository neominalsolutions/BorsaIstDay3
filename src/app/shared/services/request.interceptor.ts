import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { delay, finalize, map, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private spinner: SpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // request yakandığı yer

    console.log('request', request);

    this.spinner.showLoading();

    if (request.method == 'GET') {
      console.log('http-get');
    }

    // request transform
    // headers tranform
    // cache işlemleri
    // loading service işlemleri

    return next.handle(request).pipe(
      delay(100),
      map(
        (data) => {
          return data;
        },
        finalize(() => {
          this.spinner.hideLoading();
        })
      )
    ); // request devam ettirdiği yer.
  }
}
