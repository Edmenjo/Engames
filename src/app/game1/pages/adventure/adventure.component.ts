import { Component, OnInit } from '@angular/core';
import { Game1logic } from '../../../game1logic';
import { db } from '../../../db';
import { DbService } from "../../../db.service";


@Component({
  selector: 'app-game1',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss'],
  providers: [Game1logic, DbService]
})

export class AdventureComponent implements OnInit {
  db: db[];

  game1Finished: any;//local storage vars
  game2Finished: any;

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

    this.DbService.getDB().
    subscribe(result => this.db = result);
  }

  dialogMove(nextDialog: any): void {
    this.game.showDialog = false;//to show only 1 dialog, even when clicked
  }
}
