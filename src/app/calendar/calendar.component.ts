import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @ViewChild('fullCalendar') fullCalendar: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    (jQuery(this.fullCalendar.nativeElement) as any).fullCalendar({
      googleCalendarApiKey: environment.googleApiKey,
      defaultView: 'listMonth',
      events: {
          googleCalendarId: 'jc0n2c8c0ttorqju8c231va4so@group.calendar.google.com',
          className: 'gcal-event', // an option!
      }
    });
  }

}
