import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Route, RouterModule} from '@angular/router';
import {Angulartics2GoogleAnalytics, Angulartics2Module} from 'angulartics2';

import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar/calendar.component';
import {FooterComponent} from './footer.component';
import {HomeComponent} from './home/home.component';
import {ImagesModule} from './images/images.module';
import {MaterialModule} from './material/material.module';
import {ResumeComponent} from './resume/resume.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'resume', component: ResumeComponent},
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  declarations: [
    AppComponent, CalendarComponent, AboutComponent, HomeComponent,
    FooterComponent, ResumeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    ImagesModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
