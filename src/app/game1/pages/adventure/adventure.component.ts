import { Component, OnInit } from '@angular/core';
import { Game1logic } from '../../../game1logic';
import { db } from '../../../db';
import { DbService } from "../../../db.service";


@Component({
  selector: 'app-game1',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss'],
  providers: [Game1logic]
})

export class AdventureComponent implements OnInit {
  db: db[];

  game1Finished: any;//local storage vars
  game2Finished: any;

  dialog: any;
  counter: any;
  adding = 0;

  constructor(public game: Game1logic, private DbService: DbService) { }

  ngOnInit(): void {
    this.game1Finished = localStorage.getItem('game1');
    this.game2Finished = localStorage.getItem('game2');

    if (this.game2Finished === "finished"){
      this.game.text1 = false;
      this.game.text2 = false;
      this.game.text3 = true;
    } else if(this.game1Finished === "finished"){
      this.game.text1 = false;
      this.game.text2 = true;
    } else {
      this.game.text1 = true;
    }

    this.counter = localStorage.getItem('dialog');
    this.DbService.getDB().
    subscribe(result => this.db = result);
  }

  dialogMove(nextDialog: any): void {
    this.game.showDialog = false;
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
}
