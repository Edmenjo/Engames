import { Component } from '@angular/core';
import { Game1logic } from 'src/app/game1logic';
import { Status } from 'src/app/game1status';
import lateralGame from '../../data/lateralButtons.json';

@Component({
  selector: 'app-game1',
  templateUrl: './lateral-buttons.component.html',
  styleUrls: ['./lateral-buttons.component.scss'],
  providers: [Game1logic]
})

export class LateralButtonsComponent {

  flag: number = 0;

  lateralButtonsFlag: number = 0;//next answer in lateral bottons
  leftValue: any;
  rightValue: any;
  realName: any;
  src: any;
  hasImage: any;


  constructor(public game: Game1logic) {

    this.leftValue = lateralGame[this.lateralButtonsFlag].left;
    this.rightValue = lateralGame[this.lateralButtonsFlag].right;
    this.realName = lateralGame[this.lateralButtonsFlag].name;
    this.src = lateralGame[this.lateralButtonsFlag].src;
    this.hasImage = lateralGame[this.lateralButtonsFlag].image;

  }

  startGame(): void{
    this.game.gameStatus = Status.START;
    this.game.gameStart();
  }

  lateralButtons(lateralButton: any): void {
    const pressedButton = lateralButton.currentTarget;

    if(pressedButton.getAttribute('id') === 'left' &&
     this.leftValue === lateralGame[this.lateralButtonsFlag].trueOne){
      (<HTMLButtonElement>pressedButton).classList.add('right-answer');
      setTimeout(()=>{
        pressedButton.classList.remove('right-answer');
      },700)
    } else if(pressedButton.getAttribute('id') === 'right' &&
     this.rightValue === lateralGame[this.lateralButtonsFlag].trueOne){
      (<HTMLButtonElement>pressedButton).classList.add('right-answer');
      setTimeout(()=>{
        pressedButton.classList.remove('right-answer');
      },700)
    } else {
      pressedButton.classList.add('wrong-answer');
      setTimeout(()=>{
        pressedButton.classList.remove('wrong-answer');
      },700)
    }

    //moving to next question
    this.lateralButtonsFlag++;

    //saving it
    this.leftValue = lateralGame[this.lateralButtonsFlag].left;
    this.rightValue = lateralGame[this.lateralButtonsFlag].right;
    this.realName = lateralGame[this.lateralButtonsFlag].name;
    this.src = lateralGame[this.lateralButtonsFlag].src;
    this.hasImage = lateralGame[this.lateralButtonsFlag].image;

    if(this.hasImage === "true"){
      this.game.hasAnImage = true;
    } else {
      this.game.hasAnImage = false;
    }
    this.flag++;
    if(this.flag === 6){//for showing next diffculty
      this.game.nextDificulty = true;
      localStorage.setItem('game3', 'finished');
      this.game.text3 = false;
    }
  }
}
