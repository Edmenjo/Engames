import { Component } from '@angular/core';
import { Game2logic } from 'src/app/game2logic';
import { Status } from 'src/app/game1status';
import imagesData from '../data/images.json';
import wordsToChoose from '../data/words.json';

@Component({
  selector: 'app-game1',
  templateUrl: '../page2/page2.component.html',
  styleUrls: ['../game1.component.scss'],
  providers: [Game2logic]
})

export class Page2Component {

  Images: any = imagesData;
  Words: any = wordsToChoose;

  image: any;
  whatImage: number = 0;
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

    this.word1 = wordsToChoose[this.whatWoords].name;
    this.word2 = wordsToChoose[this.whatWoords+1].name;
    this.word3 = wordsToChoose[this.whatWoords+2].name;
  }


  async clickSubfield (subfield: any): Promise<void> {
    if(this.game.gameStatus === 1) {
      const position = subfield.currentTarget.getAttribute('position');
      const information = document.querySelector('.current-status');

      if(this.image.name === this.whichAnswer()){//checking the right answer
        subfield.currentTarget.classList.add('right-answer');
        //this.game.correctAnswers++;
        console.log("YAY");
      } else {
        subfield.currentTarget.classList.add('wrong-answer');
        //this.game.wrongAnswers++;
        console.log("NOPE");
      }



      if(this.game.flag === 7){
        this.game.nextDificulty = true;
      }


      if (this.game.gameStatus === 1 ){
        this.game.flag++;
        const currentImage = this.game.allImages[this.game.flag].name;
        if(information != null){
          information.innerHTML = currentImage;
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
      return "ERROR, La respuesta no esta entre las opciones";
    }
  }
}
