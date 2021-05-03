import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { db } from '../db';
import { DbService } from '../db.service';

@Component({
  selector: 'app-db-search',
  templateUrl: './db-search.component.html',
  styleUrls: [ './db-search.component.scss' ]
})

export class DbSearchComponent implements OnInit {
  db: db[];
  private searchTerms = new Subject<string>();

  constructor(private dbService: DbService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    console.log(this.db);
  }


  ngOnInit(): void {
    /*
    this.db = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.dbService.searchDb(term)),
    );
    */
  }
}
