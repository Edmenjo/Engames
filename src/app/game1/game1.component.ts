import { Component, OnInit } from '@angular/core';
import { Game1logic } from '../game1logic';
import { Routes, RouterModule } from '@angular/router';
import { Images } from '../images';
import { Status } from '../game1status';
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

  constructor(public game: Game1logic) { }

  ngOnInit(): void {
  }

  startGame(): void{
    this.game.gameStart();
    const information = document.querySelector('.current-status');
    this.image = imagesData;
    this.whatImage = this.game.randomImage();//what image to start with
    if(information != null){
      information.innerHTML = this.image[this.whatImage].name;
    }


  }

  async clickSubfield (subfield: any): Promise<void> {
    if(this.game.gameStatus === 1) {
      const pictureName = subfield.currentTarget.getAttribute('id');


      const information = document.querySelector('.current-status');


      if(this.image[this.whatImage].name === pictureName){//si coincide el nombre con el del campo clickado
        subfield.currentTarget.classList.add('right-answer');
        this.game.correctAnswers++;
      } else {
        subfield.currentTarget.classList.add('wrong-answer');
        this.game.wrongAnswers++;
      }



      if(this.game.flag === 7){//for showing next diffculty
        this.game.nextDificulty = true;
      }




      await this.game.checkGameEndWinner().then( (end: boolean) => {
        if(this.game.gameStatus === 0 && end) {
          if(information != null){
            information.innerHTML = 'Winner is player ' + this.game.currentTurn;
          }
        }
      });

      await this.game.checkGameEndFull().then( (end: boolean) => {
        if(this.game.gameStatus === 0 && end) {
          if(information != null){
            information.innerHTML = 'You had ' + this.game.correctAnswers + ' correct answers. This was just easy mode, get ready for the real game now.';
          }
        }
      });

      if (this.game.gameStatus === 1 ){
        this.game.flag++;//for next difficulty
        this.whatImage++;//+1 to the index
        if(this.whatImage > 8){//if its over the possible index
          this.whatImage -= 9;//-9 to start over
        }
        if(information != null){
          information.innerHTML = this.image[this.whatImage].name;//showing next name
        }
      }
    }


  }

}
