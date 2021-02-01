import { Component, OnInit } from '@angular/core';
import { Game1logic } from '../game1logic';
import { Routes, RouterModule } from '@angular/router';
import { Images } from '../images';


@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.scss'],
  providers: [Game1logic]
})
export class Game1Component implements OnInit {




  constructor(public game: Game1logic) { }

  ngOnInit(): void {
  }

  startGame(): void{
    this.game.gameStart();
    const information = document.querySelector('.current-status');
    if(information != null){
      information.innerHTML = this.game.allImages[0].name;
    }


  }

  async clickSubfield (subfield: any): Promise<void> {
    if(this.game.gameStatus === 1) {
      const position = subfield.currentTarget.getAttribute('position');
      const information = document.querySelector('.current-status');

      this.game.setField(position, this.game.currentTurn);
      const color = this.game.setPlayerColorClass();
      subfield.currentTarget.classList.add(color);




      if(this.game.allImages[this.game.flag].position === position){
        subfield.currentTarget.classList.add('right-answer');
        this.game.correctAnswers++;
      } else {
        subfield.currentTarget.classList.add('wrong-answer');
        this.game.wrongAnswers++;
      }



      if(this.game.flag === 7){
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
        this.game.flag++;
        const currentImage = this.game.allImages[this.game.flag].name;
        if(information != null){
          information.innerHTML = currentImage;
        }
      }
    }


  }

}
