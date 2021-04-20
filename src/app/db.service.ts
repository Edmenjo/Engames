import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { db } from './db';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private db: Observable<db[]>;
  private dbUrl = 'api/db';  // URL to web api
  /** Log a dbService message with the MessageService */
  private log(message: string) {
  //this.messageService.add(`dbService: ${message}`);

  }

  constructor(
    private http: HttpClient,
    //private messageService: MessageService
    ) { }



  /** GET db from the server */
  getDB(): Observable<db[]> {
    return this.http.get<db[]>(this.dbUrl)
  }


}
