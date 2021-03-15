import { Component } from '@angular/core';
import { Game2logic } from 'src/app/game2logic';
import { Status } from 'src/app/game1status';
import imagesData from '../data/images.json';
import wordsToChoose from '../data/words.json';
import lateralGame from '../data/lateralButtons.json';

@Component({
  selector: 'app-game1',
  templateUrl: '../page2/page2.component.html',
  styleUrls: ['../game1.component.scss'],
  providers: [Game2logic]
})

export class Page2Component {

  flag: number = 0;
  accessHardMode: boolean = false;

  image: any;
  imageForButton: any;
  whatImage: number = 0;
  whatImageForButton: number = 0;

  whatWoords: number = 0;
  word1: any;
  word2: any;
  word3: any;

  buttonID: any;

  constructor(public game: Game2logic) { }


  startGame(): void{
    this.game.gameStatus = Status.START;
    this.game.gameStart();
    console.log(this.game.correctOrder);
    this.image = imagesData[this.whatImage];
    this.imageForButton = imagesData[this.whatImageForButton];

    this.whatWoords = 0;
    this.word1 = wordsToChoose[this.whatWoords];
    this.word2 = wordsToChoose[this.whatWoords+1];
    this.word3 = wordsToChoose[this.whatWoords+2];


  }

  playHardMode(){
    this.accessHardMode = true;
  }


  async clickSubfield (subfield: any): Promise<void> {
    const pressedButton = subfield.currentTarget;
    if(this.game.gameStatus === 1) {
      this.buttonID = pressedButton.getAttribute('id');


      console.log(this.whichAnswer(pressedButton),this.image.name);

      if(this.whichAnswer(pressedButton)){//checking the right answer
        pressedButton.classList.add('right-answer');
        setTimeout(()=>{
        pressedButton.classList.remove('right-answer');
      },700)
      } else {
        pressedButton.classList.add('wrong-answer');
        setTimeout(()=>{
          pressedButton.classList.remove('wrong-answer');
        },700)
      }


      if(this.flag === 8){//for showing next diffculty
        this.game.nextDificulty = true;
      }


      //moving to next image and words
      this.whatImage++;
      this.whatWoords = this.whatWoords + 3;

      //for showing next image and words
      this.image = imagesData[this.whatImage];
      this.word1 = wordsToChoose[this.whatWoords];
      this.word2 = wordsToChoose[this.whatWoords+1];
      this.word3 = wordsToChoose[this.whatWoords+2];

    }



  }

  whichAnswer(pressedButton: any): boolean{//method for checking the right answer   ***DOESN'T WORK YET***
    if(this.word1.id && this.buttonID === '1'){
      if(this.word1.name === this.image.name)
        return true;
    } else if (this.word2.id && this.buttonID === '2'){
      if(this.word2.name === this.image.name)
        return true;
    } else if (this.word3.id && this.buttonID === '3'){
      if(this.word3.name === this.image.name)
        return true;
    } else {
      console.log("LA RESPUESTA NO ESTA ENTRE LAS CORRECTAS");
      return false;
    }
    return false;
  }
}
