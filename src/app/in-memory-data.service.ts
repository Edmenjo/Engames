import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { db } from './db';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const db = [
      { id: 1, dialog: "Welcome adventurer! I am Space George. ¿Ready for some adventure?" },
      { id: 2, dialog: "You have completed THE GRID. Now use the new spaceship for playing Choose it!" },
      { id: 3, dialog: "I have to admit you are doing great! Go on." },
      { id: 4, dialog: 'Wow! Just... keep going!' },
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
