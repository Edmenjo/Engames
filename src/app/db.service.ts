import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    //private messageService: MessageService
    ) { }



  /** GET db from the server */
  getDB(): Observable<db[]> {
    return this.http.get<db[]>(this.dbUrl)
    .pipe(
      tap(_ => this.log('fetched db')),
      catchError(this.handleError<db[]>('getDb id=${id}'))
    );
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
