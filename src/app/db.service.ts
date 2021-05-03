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

/** PUT: update the Db on the server */
updateDb(db: db[]): Observable<any> {
  return this.http.put(this.dbUrl, db, this.httpOptions).pipe(
    tap(_ => this.log(`updated db`)),
    catchError(this.handleError<any>('updateDb'))
  );
}

/** POST: add a new db to the server */
addDb(db: db): Observable<db> {
  return this.http.post<db>(this.dbUrl, db, this.httpOptions).pipe(
    tap((newdb: db) => this.log(`added db w/ id=${newdb.id}`)),
    catchError(this.handleError<db>('addDb'))
  );
}

/** DELETE: delete the db from the server */
deleteDb(id: number): Observable<db> {
  const url = `${this.dbUrl}/${id}`;

  return this.http.delete<db>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted db id=${id}`)),
    catchError(this.handleError<db>('deleteDb'))
  );
}

/* GET dbs whose name contains search term */
searchDb(term: string): Observable<db[]> {
  if (!term.trim()) {
    // if not search term, return empty db array.
    return of([]);
  }
  return this.http.get<db[]>(`${this.dbUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found db matching "${term}"`) :
       this.log(`no db matching "${term}"`)),
    catchError(this.handleError<db[]>('searchDb', []))
  );
}


}
