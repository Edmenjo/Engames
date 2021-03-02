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
import { Page2Component } from './game1/page2/page2.component';
import { Game1logic } from './game1logic';

import { Page3Component } from './game1/pages/page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Game1Component,
    Page2Component,
    Page3Component
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
