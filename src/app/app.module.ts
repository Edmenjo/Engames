import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { Game1Component } from './game1/game1.component';

import {MatButtonModule} from '@angular/material/button';
import { Game1logic } from './game1logic';

import { AdventureComponent } from './game1/pages/adventure/adventure.component';
import { SideNavComponent } from './game1/pages/side-nav/side-nav.component';
import { SideNavContentComponent } from './game1/pages/side-nav-content/side-nav-content.component';
import { LateralButtonsComponent } from './game1/pages/lateral-buttons/lateral-buttons.component';
import { ChooseItComponent } from './game1/pages/choose-it/choose-it.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Game1Component,
    AdventureComponent,
    SideNavComponent,
    SideNavContentComponent,
    LateralButtonsComponent,
    ChooseItComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [Game1logic],
  bootstrap: [AppComponent]
})
export class AppModule { }
