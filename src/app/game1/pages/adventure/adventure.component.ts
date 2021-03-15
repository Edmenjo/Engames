import { Component, OnInit } from '@angular/core';
import { Game1logic } from '../../../game1logic';
import { Routes, RouterModule } from '@angular/router';
import imagesData from './data/images.json';
import adventureText from '../../data/adventureText.json';
import { SideNavDirection } from '../side-nav/side-nav-direction';


@Component({
  selector: 'app-game1',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss'],
  providers: [Game1logic]
})
export class AdventureComponent implements OnInit {

  adventureTextVar: any = adventureText;

  sideNavDirect: SideNavDirection;

  constructor(public game: Game1logic) { }

  ngOnInit(): void {
  }

  goToGame(): void{

  }

  dialogMove(nextDialog: any): void {
    const pressedButton = nextDialog.currentTarget.getAttribute('id');
    if(pressedButton === "1"){
      this.game.text1 = false;
      this.game.text2 = true;
    }
  }

  async clickSubfield (subfield: any): Promise<void> {






  }

}
