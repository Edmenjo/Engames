import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Game1Component } from './game1/game1.component';
import { Page2Component } from './game1/page2/page2.component';
import { Page3Component } from './game1/pages/page3/page3.component';
import { AdventureComponent } from './game1/pages/adventure/adventure.component';

const routes: Routes = [
  { path: '', redirectTo: 'adventure', pathMatch: 'full' },
  { path: 'adventure', component: AdventureComponent },
  { path: 'game1', component: Game1Component },
  { path: 'game2', component: Page2Component },
  { path: 'game3', component: Page3Component },

  // otherwise redirect to home
  //{ path: '**', redirectTo: '/secondpage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
