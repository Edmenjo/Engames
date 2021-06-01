import { Status } from './game1status';

export class Game1logic {

  //var to check if game 1 is completed
  game1Finished: boolean = false;
  game2Finished: boolean = false;

  //for lateral buttons game
  hasAnImage: boolean = true;

  //vars to advance in adventureText.json
  showDialog: boolean = true;
  text1: boolean = false;
  text2: boolean = false;
  text3: boolean = false;

  gameStatus: Status;

  correctAnswers: number = 0;
  wrongAnswers: number = 0;

  nextDificulty: boolean = false;
  flag: number = 1; //to show a button for next difficulty

  random: number = 0;
  randomCopy: number = 0;

  public constructor(){
    this.gameStatus = Status.STOP;
  }

  gameStart(): void {
    this.gameStatus = Status.START;
  }

  //random number generator from 0 to 8
  randomImage(): number {
    this.random = Math.random();
    this.randomCopy = this.random;
    this.randomCopy = this.randomCopy * 10 % 1;
    return ((this.random * 10) - this.randomCopy) - 1;
  }

}
