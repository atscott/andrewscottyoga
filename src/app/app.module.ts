import {NgModule} from '@angular/core';
import {JsonpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {Route, RouterModule} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar/calendar.component';
import {HomeComponent} from './home/home.component';
import {MaterialModule} from './material/material.module';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  declarations:
      [AppComponent, CalendarComponent, AboutComponent, HomeComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    JsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
