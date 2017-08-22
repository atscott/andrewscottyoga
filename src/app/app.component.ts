import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

import {CalendarComponent} from './calendar/calendar.component';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {'(window:resize)': 'onResize($event)'}
})
export class AppComponent {
  hero = 'hero1.jpg';
  heroHeight = '600';
  readonly menuItems = [
    {name: 'Home', icon: 'home', link: '', secondary: ''},
    {name: 'About', icon: 'info', link: 'about', secondary: ''},
    {
      name: 'Calendar',
      icon: 'event',
      link: 'calendar',
      secondary: 'Teaching and attending schedule'
    },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.onResize({target: {innerWidth: window.innerWidth}});
    this.router.events.filter((event) => event instanceof NavigationEnd)
        .map(() => this.activatedRoute)
        .map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        })
        .filter((route) => route.outlet === 'primary')
        .subscribe((route) => {
          switch (route.component) {
            case HomeComponent:
              this.hero = '/assets/hero1.jpg';
              break;
            case CalendarComponent:
              this.hero = '/assets/hero2.jpg';
              break;
            default:
              this.hero = '/assets/hero3.jpg';
              break;
          }
        });
  }

  onResize(event) {
    const width = event.target.innerWidth;
    if (width < 900 && width > 600) {
      this.heroHeight = '500';
    } else if (width < 600) {
      this.heroHeight = '400';
    } else {
      this.heroHeight = '600';
    }
  }
}
