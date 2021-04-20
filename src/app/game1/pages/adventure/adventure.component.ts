import { Component, OnInit } from '@angular/core';
import { Game1logic } from '../../../game1logic';
import { Routes, RouterModule } from '@angular/router';
import imagesData from './data/images.json';
import adventureText from '../../data/adventureText.json';
import { SideNavDirection } from '../side-nav/side-nav-direction';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-game1',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss'],
  providers: [Game1logic]
})
export class AdventureComponent implements OnInit {
  showFiller = false;

  game1Finished: any;//local storage vars
  game2Finished: any;
  dialog: any;
  counter: any;
  adding = 0;

  adventureTextVar: any = adventureText;

  sideNavDirect: SideNavDirection;

  constructor(public game: Game1logic) { }

  ngOnInit(): void {
    this.game1Finished = localStorage.getItem('game1');
    this.game2Finished = localStorage.getItem('game2');
    this.counter = localStorage.getItem('dialog');
  }

  goToGame(): void{

  }

  dialogMove(nextDialog: any): void {
    localStorage.removeItem('dialog');

    this.dialog = localStorage.getItem('dialog');
    const pressedButton = nextDialog.currentTarget.getAttribute('id');
    if(pressedButton === "1"){
      this.game.text1 = false;
      this.game.text2 = true;
    }
    this.adding++;
    this.dialog = ""+this.adding;

    localStorage.setItem('dialog', this.dialog);
  }

  async clickSubfield (subfield: any): Promise<void> {






  }

}
