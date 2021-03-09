import { Component } from '@angular/core';
import { Game2logic } from 'src/app/game2logic';
import { Status } from 'src/app/game1status';
import imagesData from '../../data/images.json';
import wordsToChoose from '../../data/words.json';
import lateralGame from '../../data/lateralButtons.json';

@Component({
  selector: 'app-game1',
  templateUrl: './page3.component.html',
  styleUrls: ['../../game1.component.scss'],
  providers: [Game2logic]
})

export class Page3Component {

  flag: number = 0;
  accessHardMode: boolean = false;

  lateralButtonsFlag: number = 0;//next answer in lateral bottons
  leftValue: any;
  rightValue: any;
  realName: any;
  src: any;
  hasImage: any;


  constructor(public game: Game2logic) {

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

  playHardMode(){
    this.accessHardMode = true;
  }

  lateralButtons(lateralButton: any): void {
    const information2 = document.querySelector('.current-status');
    const pressedButton = lateralButton.currentTarget;
    if(pressedButton.getAttribute('id') === 'left' && this.leftValue === lateralGame[this.lateralButtonsFlag].trueOne){
      pressedButton.classList.add('right-answer');
    } else if(pressedButton.getAttribute('id') === 'right' && this.rightValue === lateralGame[this.lateralButtonsFlag].trueOne){
      pressedButton.classList.add('right-answer');
    } else {
      pressedButton.classList.add('wrong-answer');
    }

    setTimeout(()=>{
      pressedButton.classList.add('backAtIT');
    },700)
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
    if(this.flag === 3){//for showing next diffculty
      this.game.nextDificulty = true;
    }
  }
}
