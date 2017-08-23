import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Route, RouterModule} from '@angular/router';
import {Angulartics2GoogleAnalytics, Angulartics2Module} from 'angulartics2';

import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar/calendar.component';
import {FooterComponent} from './footer.component';
import {HomeComponent} from './home/home.component';
import {ImagesModule} from './images/images.module';
import {MaterialModule} from './material/material.module';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  declarations: [
    AppComponent, CalendarComponent, AboutComponent, HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    ImagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
