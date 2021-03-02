import { Component } from '@angular/core';
import { Game2logic } from 'src/app/game2logic';
import { Status } from 'src/app/game1status';
import imagesData from '../data/images.json';
import wordsToChoose from '../data/words.json';
import lateralGame from '../data/lateralButtons.json';

@Component({
  selector: 'app-game1',
  templateUrl: '../page2/page2.component.html',
  //templateUrl: '../pages/page3/page3.component.html',
  styleUrls: ['../game1.component.scss'],
  providers: [Game2logic]
})

export class Page2Component {

  image: any;
  imageForButton: any;
  whatImage: number = 0;
  whatImageForButton: number = 0;

  whatWoords: number = 0;
  word1: string = '';
  word2: any;
  word3: any;

  constructor(public game: Game2logic) { }


  startGame(): void{
    this.game.gameStatus = Status.START;
    this.game.gameStart();
    console.log(this.game.correctOrder);
    this.image = imagesData[this.whatImage];
    this.imageForButton = imagesData[this.whatImageForButton];

    this.word1 = wordsToChoose[this.whatWoords].name;
    this.word2 = wordsToChoose[this.whatWoords+1].name;
    this.word3 = wordsToChoose[this.whatWoords+2].name;


  }

  //almost working


  async clickSubfield (subfield: any): Promise<void> {
    const pressedButton = subfield.currentTarget;
    if(this.game.gameStatus === 1) {
      const position = subfield.currentTarget.getAttribute('position');
      const information = document.querySelector('.current-status');

      if(this.image.name === this.whichAnswer()){//checking the right answer
        pressedButton.classList.add('right-answer');
        console.log("YAY");
      } else {
        pressedButton.classList.add('wrong-answer');
        console.log("NOPE");
      }



      if(this.game.flag === 7){
        this.game.nextDificulty = true;
      }

      if(this.game.flag === 9){
        this.game.nextDificulty = false;
      }

      if (this.game.gameStatus === 1 && this.game.nextDificulty === false){
        this.game.flag++;
        const currentImage = this.game.allImages[this.game.flag].name;
        if(information != null){
          information.innerHTML = this.image.name;
        }
      }

      //moving to next image and words
      this.whatImage++;
      this.whatWoords = this.whatWoords + 3;

      //for showing next image and words
      this.image = imagesData[this.whatImage];
      this.word1 = wordsToChoose[this.whatWoords].name;
      this.word2 = wordsToChoose[this.whatWoords+1].name;
      this.word3 = wordsToChoose[this.whatWoords+2].name;

      setTimeout(()=>{
        pressedButton.classList.add('backAtIT');
      },700)
    }


  }

  whichAnswer(): string{//method for checking the right answer   ***DOESN'T WORK YET***
    if(this.image.name === this.word1){
      return this.word1;
    } else if (this.image.name === this.word2){
      return this.word2;
    } else if (this.image.name === this.word3){
      return this.word3;
    } else {
      console.log("LA RESPUESTA NO ESTA ENTER LAS CORRECTAS");
      return "ERROR, La respuesta no esta entre las opciones";
    }
  }
}
