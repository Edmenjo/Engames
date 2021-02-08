import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Status } from './game1status';
import { InsideContent } from './game1content';
import { Images } from './images'

export class Game1logic {

  gameField: Array<number> = [];

  currentTurn: number = 1;

  gameStatus: Status;

  gameContent: InsideContent;

  correctAnswers: number = 0;

  wrongAnswers: number = 0;

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
    this.gameContent = InsideContent.BUFFET;
    this.gameField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  gameStart(): void {
    this.gameField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.gameStatus = Status.START;


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

    if(this.gameField.includes(0) ) {
      isFull = false;
    }

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
