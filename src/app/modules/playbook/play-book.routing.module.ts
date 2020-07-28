import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayBookComponent } from './components/play-book/play-book.component';

export const routes: Routes = [
  {
    path: '',
    component: PlayBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayBookRoutingModule {}
