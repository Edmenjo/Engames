import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Game1Component } from './game1/game1.component';
import { LateralButtonsComponent } from './game1/pages/lateral-buttons/lateral-buttons.component';
import { AdventureComponent } from './game1/pages/adventure/adventure.component';
import { ChooseItComponent } from './game1/pages/choose-it/choose-it.component';
import { ProfileComponent } from './game1/pages/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'adventure', pathMatch: 'full' },
  { path: 'adventure', component: AdventureComponent },
  { path: 'game1', component: Game1Component },
  { path: 'game2', component: ChooseItComponent },
  { path: 'game3', component: LateralButtonsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'game1plus', component: Game1Component },

  // otherwise redirect to home
  //{ path: '**', redirectTo: '/secondpage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
