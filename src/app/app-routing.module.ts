import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Game1Component } from './game1/game1.component';

import { Page2Component } from './game1/page2/page2.component';

const routes: Routes = [
  { path: '', redirectTo: 'game1', pathMatch: 'full' },
  { path: 'game1', component: Game1Component },
  { path: 'game2', component: Page2Component },

  // otherwise redirect to home
  //{ path: '**', redirectTo: '/secondpage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
