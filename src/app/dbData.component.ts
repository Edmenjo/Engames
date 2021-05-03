import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Game1logic } from "./game1logic";
import { db } from './db';
import { Observable } from "rxjs/internal/Observable";
import { DbService } from "./db.service";

@Component({
  selector: 'app-game1',
  templateUrl: './dbData.component.html',
  providers: [Game1logic]
})
export class DbDataComponent implements OnInit {

  db: db[];

  constructor(private DbService: DbService) { }

  ngOnInit(): void {
    this.DbService.getDB().
    subscribe(result => this.db = result);
  }

  save(): void {
    this.DbService.updateDb(this.db)
      .subscribe();
  }

  /*add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.DbService.addDb({ name } as db)
      .subscribe(db => {
        this.db.push(db);
      });
  }*/

  delete(db: db): void {
    this.db = this.db.filter(h => h !== db);
    this.DbService.deleteDb(db.id).subscribe();
  }


}
