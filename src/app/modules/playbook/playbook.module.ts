import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgDragDropModule } from 'ng-drag-drop';
import { PlayBookRoutingModule } from './play-book.routing.module';

import { PlayBookComponent } from './components/play-book/play-book.component';

import { PlayBookService } from './http/play-book.service';

@NgModule({
  declarations: [PlayBookComponent],
  imports: [CommonModule, NgDragDropModule.forRoot(), PlayBookRoutingModule],
  providers: [PlayBookService],
})
export class PlaybookModule {}
