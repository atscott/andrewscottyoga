import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {CalendarComponent} from './calendar/calendar.component';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hero = 'hero1';
  heroHeight = '600';
  readonly menuItems = [
    {name: 'Home', link: ''},
    {name: 'About', link: 'about'},
    {name: 'Calendar', link: 'calendar'},
  ];


  readonly pageData = new Map([
    [
      HomeComponent, {
        hero: '/assets/hero1',
        header: 'Andrew Scott',
        subheader: 'Yoga teacher'
      }
    ],
    [
      CalendarComponent, {
        hero: '/assets/hero2',
        header: 'Yoga calendar',
        subheader: `Classes I'm attending or teaching`
      }
    ],
    [AboutComponent, {hero: '/assets/hero3', header: '', subheader: ''}]
  ]);

  activePageData = this.pageData.get(HomeComponent)

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.filter((event) => event instanceof NavigationEnd)
        .map(() => this.activatedRoute)
        .map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        })
        .filter((route) => route.outlet === 'primary')
        .subscribe((route) => {
          this.activePageData = this.pageData.get(route.component as any) ||
              this.pageData.get(HomeComponent);
        });
  }
}
