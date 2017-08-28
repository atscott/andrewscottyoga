import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {'(window:resize)': 'onResize($event.target.innerWidth)'}
})
export class HomeComponent implements OnInit {
  imageWidth: string;
  imageMargin: string;

  images = [
    'insta8.jpg', 'insta2.jpg', 'insta3.jpg', 'insta4.jpg', 'insta5.jpg',
    'insta6.jpg'
  ];

  constructor() {
    this.onResize(window.innerWidth);
  }

  ngOnInit() {}

  onResize(width) {
    if (width < 700) {
      this.imageWidth = '29%';
      this.imageMargin = '2px';
    } else {
      this.imageWidth = '25%';
      this.imageMargin = '14px';
    }
  }
}
