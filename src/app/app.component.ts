import { Component } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-picture-slide';
  slides = [
    {
      id: 0,
      name: 'slide1',
      color: 'blue',
      type: 'slide',
    },
    {
      id: 1,
      name: 'slide2',
      color: 'green',
      type: 'slide',
    },
    {
      id: 2,
      name: 'slide3',
      color: 'yellow',
      type: 'slide',
    },
    {
      id: 3,
      name: 'slide4',
      color: 'red',
      type: 'slide',
    },
  ];
  pictures = [
    {
      id: 0,
      image: 'picture1',
    },
    {
      id: 1,
      image: 'picture2',
    },
    {
      id: 2,
      image: 'picture3',
    },
    {
      id: 3,
      image: 'picture4',
    },
  ];

  slidePictures = [];

  onSlideDrop($event) {
    this.slidePictures.push($event.dragData);
    this.slides.splice(
      this.slides.findIndex((slide) => slide.id == $event.dragData.id),
      1
    );
  }

  onPictureDrop($event, i) {
    if ($event.dragData.type == 'slide') return;
    this.slidePictures[i]['picture'] = $event.dragData.image;
    this.pictures.splice(
      this.pictures.findIndex((pic) => pic.id == $event.dragData.id),
      1
    );
  }
}
