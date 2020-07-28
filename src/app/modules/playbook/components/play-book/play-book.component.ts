import { Component, OnInit } from '@angular/core';
import { PlayBookService } from '../../http/play-book.service';

@Component({
  selector: 'app-play-book',
  templateUrl: './play-book.component.html',
  styleUrls: ['./play-book.component.scss'],
})
export class PlayBookComponent implements OnInit {
  constructor(private playbookService: PlayBookService) {}
  slides: any = [];
  sketches: any = [];
  slidePictures = [];

  ngOnInit(): void {
    this.playbookService.getSlides('/slides.json').subscribe((res) => {
      this.slides = res;
    });
    this.playbookService.getSketches('/sketches.json').subscribe((res) => {
      this.sketches = res;
    });
  }

  onSlideDrop($event) {
    if ($event.dragData.type != 'slide') return;
    this.slidePictures.push($event.dragData);
    this.AddRemoveBlankSlide();
  }

  onPictureDrop($event, i) {
    if ($event.dragData.type == 'slide') {
      this.slidePictures.splice(i, 0, $event.dragData);
      this.AddRemoveBlankSlide();
    }
    if (this.slidePictures[i]['url'] || this.slidePictures[i]['blankAdd'])
      return;
    this.slidePictures[i] = {
      ...this.slidePictures[i],
      ...$event.dragData,
      ...{ sketchId: i },
    };
  }

  AddRemoveBlankSlide() {
    this.slidePictures = this.slidePictures.filter((slides) => {
      return !slides.blankAdd;
    });
    switch (this.slidePictures.length) {
      case 0:
        break;
      case 1:
        this.slidePictures.push({ blankAdd: 1 });
        this.slidePictures.push({ blankAdd: 1 });
        this.slidePictures.push({ blankAdd: 1 });
        break;
      case 2:
        this.slidePictures.push({ blankAdd: 1 });
        this.slidePictures.push({ blankAdd: 1 });

        break;
      case 3:
        this.slidePictures.push({ blankAdd: 1 });
        break;
      default:
        if (this.slidePictures.length % 3 == 0) {
          this.slidePictures.push({ blankAdd: 1 });
        } else {
          this.slidePictures = this.slidePictures.filter((slides) => {
            return !slides.blankAdd;
          });
        }
    }
  }
}
