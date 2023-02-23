import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationStart,
  Router,
  Event as NavigationEvent,
  NavigationEnd,
} from '@angular/router';

// page componentlerde bir component içinden selector ile çağırılmayacağından dolayı bir selector name tanımı yok.
@Component({
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss'],
})
export class UserDetailPageComponent implements OnInit {
  // route üzerinden yada query string üzerindne gönderilen değerlere ulaşmamızı sağlayan servis.

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {
    this.router.events.subscribe((event: NavigationEvent) => {
      // event navigationStart aşamasındaysa
      if (event instanceof NavigationStart) {
        console.log('navigation-start', event);
      } else if (event instanceof NavigationEnd) {
        console.log('navigation-end', event);
      }
    });
  }

  ngOnInit(): void {
    // this.activatedRoute.snapshot.params route üzerindeki parametre bilgilerini oku
    console.log('param', this.activatedRoute.snapshot.params);

    console.log('ac', this.activatedRoute);
    // querystring
    console.log('queryParam', this.activatedRoute.snapshot.queryParams);

    this.title.setTitle(this.activatedRoute.snapshot.data['title']);
  }

  gotoHome() {
    // ts tarafında bir işlem sonrasında sayfalar arası yönlendirme yapmak istersek kullanacağımız service.
    console.log('router', this.router);
    this.router.navigate(['home']);
    // this.router.navigate(['home'],{queryParams:{name:'ali'}});
  }
}
