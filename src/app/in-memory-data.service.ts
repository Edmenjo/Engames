import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { db } from './db';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const db = [
      { id: 11, dialog: "Welcome adventurer! I am... ¿Ready for some adventure?" },
      { id: 12, dialog: 'Queen Dagmar' },
      { id: 13, dialog: 'Bombasto' },
      { id: 14, dialog: 'Celeritas' },
      { id: 15, dialog: 'Magneta' },
      { id: 16, dialog: 'RubberMan' },
      { id: 17, dialog: 'Dynama' },
      { id: 18, dialog: 'Dr IQ' },
      { id: 19, dialog: 'Magma' },
      { id: 20, dialog: 'Tornado' }
    ];
    return {db};
  }

  // Overrides the genId method to ensure that a db always has an id.
  // If the dbs array is empty,
  // the method below returns the initial number (11).
  // if the dbs array is not empty, the method below returns the highest
  // db id + 1.
  genId(DB: db[]): number {
    return DB.length > 0 ? Math.max(...DB.map(DB => DB.id)) + 1 : 11;
  }
}
