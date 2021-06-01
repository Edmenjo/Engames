import { Component, OnInit } from '@angular/core';
import { Game1logic } from '../game1logic';
import imagesData from './data/images.json';


@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.scss'],
  providers: [Game1logic]
})

export class Game1Component implements OnInit {

  Images: any = imagesData;
  image: any;
  whatImage: number = 0;

  //stage control variables
  flag: number = 0;

  constructor(public game: Game1logic) { }

  ngOnInit(): void {
  }

  startGame(): void{
    this.game.gameStatus = 1;
    this.game.gameStart();
    this.whatImage = this.game.randomImage();//what image to start with

    this.image = imagesData[this.whatImage];

  }

  clickSubfield (subfield: any): void {
    if(this.game.gameStatus === 1) {
      const pictureName = subfield.currentTarget.getAttribute('id');

      if(this.image.name === pictureName){//si coincide el nombre con el del campo clickado
        subfield.currentTarget.classList.add('right-answer');
        this.game.correctAnswers++;
      } else {
        subfield.currentTarget.classList.add('wrong-answer');
        this.game.wrongAnswers++;
      }


      if(this.flag === 8){//for showing next diffculty
        this.game.nextDificulty = true;
        localStorage.setItem('game1', 'finished');
        this.game.showDialog = true;
        this.game.text1 = false;
      }

        this.flag++;//for next difficulty
        this.whatImage++;//+1 to the index

        if(this.whatImage > 8){//if its over the possible index
          this.whatImage -= 9;//-9 to start over
        }

        this.image = imagesData[this.whatImage];
    }

  }

}
