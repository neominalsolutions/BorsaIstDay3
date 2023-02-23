import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
// yani root seviyesine tanımlanan servisler her module export etmeden inject edilebilir.
// singleton olarak çalıp
@Injectable({
  providedIn: 'root',
})
export default class AuthenticatedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // union Type

    var token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    var decoded = jwt_decode(token);

    console.log('decoded', decoded);

    // login sonrasında genelde token değerlerini localstorage en güvenli en fazla boyutta veri saklayamız bir storage
    localStorage.setItem('accessToken', 'xyxz');
    //localStorage.removeItem('accessToken');
    sessionStorage.setItem('sessionId', '3423423');

    console.log('route', route);
    console.log('state', state);

    let isAuthenticated = true;

    if (isAuthenticated) {
      return true;
    } else {
      alert('lütfen oturum açın');
      this.router.navigateByUrl('unauthorized');

      return false;
    }
  }
}
