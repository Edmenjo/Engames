import { Status } from './game1status';

export class Game2logic {

  originalOrder: Array<string> = [];

  correctOrder: Array<string> = [];

  currentTurn: number = 0;

  gameStatus: Status;

  actualWord: string = '';

  longestWord: number = 0;

  nextDificulty: boolean = false;

  flag: number = 0; //to show a button for next difficulty


  public constructor(){
    this.gameStatus = Status.STOP;
    this.correctOrder = this.originalOrder;
  }

  gameStart(): void {
    this.gameStatus = Status.START;
    this.orderWords();
    console.log('GAME START METHOD');

  }

  orderWords(): void {//sort by length of the words
    for(let j = 0; j < this.correctOrder.length; j++){//recorremos el correctOrder
      for(let i = 0; i < this.originalOrder.length; i++){//recorremos originalOrder
        if(this.originalOrder[i].length > this.longestWord){//si la palabra es más larga que longestWord
          this.actualWord = this.originalOrder[i];
          this.longestWord = this.actualWord.length;
          this.currentTurn = i;
        }
        if(i === this.originalOrder.length-1){//cuando ya lo hemos recorrido entero
          this.originalOrder[this.currentTurn] = "a";
        }
      }
      this.correctOrder[j] = this.actualWord;//lo copiamos
      this.actualWord = '';//reiniciamos
      this.longestWord = 0;
    }
  }

  gameEnd(): void {
    this.gameStatus = Status.STOP;
  }

}
