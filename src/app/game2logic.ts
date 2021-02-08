import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Status } from './game1status';
import { InsideContent } from './game1content';
import { Images } from './images'

export class Game2logic {

  originalOrder: Array<string> = [];

  correctOrder: Array<string> = [];

  currentTurn: number = 0;

  gameStatus: Status;

  actualWord: string = '';

  longestWord: number = 0;

  nextDificulty: boolean = false;

  flag: number = 0; //to show a button for next difficulty

  image0 = new Images("carrot",'0');
  image1 = new Images("strawberry",'1');
  image2 = new Images("candy",'2');
  image3 = new Images("dog",'3');
  image4 = new Images("butterfly",'4');
  image5 = new Images("laptop",'5');
  image6 = new Images("buffet",'6');
  image7 = new Images("carpet",'7');
  image8 = new Images("building",'8');


  allImages: Array<Images> = [this.image6, this.image1, this.image3,this.image8, this.image0, this.image7, this.image2, this.image5, this.image4];


  public constructor(){
    this.gameStatus = Status.STOP;
    this.originalOrder = [this.image0.name, this.image1.name, this.image2.name, this.image3.name, this.image4.name, this.image5.name, this.image6.name, this.image7.name, this.image8.name];
    this.correctOrder = this.originalOrder;
  }

  gameStart(): void {
    this.originalOrder = [this.image0.name, this.image1.name, this.image2.name, this.image3.name, this.image4.name, this.image5.name, this.image6.name, this.image7.name, this.image8.name];
    this.gameStatus = Status.START;
    this.orderWords();
    console.log('GAME START METHOD');

  }


//sort alphabetically

  orderWords(): void {//sort by length of the words
    for(let j = 0; j < this.correctOrder.length; j++){//recorremos el correctOrder
      for(let i = 0; i < this.originalOrder.length; i++){//recorremos originalOrder
        if(this.originalOrder[i].length > this.longestWord){//si la palabra es más larga que longestWord
          this.actualWord = this.originalOrder[i];
          this.longestWord = this.actualWord.length;
          this.currentTurn = i;
        }
        if(i === this.originalOrder.length-1){//cuando ya lo hemos recorrido entero
          console.log(this.originalOrder);
          this.originalOrder[this.currentTurn] = "a";
          console.log(this.originalOrder + "POST CAMBIO A LA A");
        }
      }
      this.correctOrder[j] = this.actualWord;//lo copiamos
      this.actualWord = '';//reiniciamos
      this.longestWord = 0;
    }
  }


  async checkGameEndWinner(): Promise<boolean> {
    let isWinner = false;

    if( isWinner ) {
      console.log('Game has ended');
      this.gameEnd();
      return true;
    } else {
      return false;
    }
  }

  async checkGameEndFull(): Promise<boolean> {
    let isFull = true;


    if( isFull ) {
      console.log('Game has ended');
      this.gameEnd();
      return true;
    } else {
      return false;
    }
  }

  gameEnd(): void {
    this.gameStatus = Status.STOP;
  }

}
