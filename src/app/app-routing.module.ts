import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'play-book',
    pathMatch: 'full',
  },
  {
    path: 'play-book',
    loadChildren: () => import('./modules/playbook/playbook.module').then(m => m.PlaybookModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
