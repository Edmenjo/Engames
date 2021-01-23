import { Component, OnInit } from '@angular/core';
import { Game1logic } from '../game1logic';
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
    information.innerHTML = this.game.allImages[0].name;


  }

  async clickSubfield (subfield: any): Promise<void> {
    if(this.game.gameStatus === 1) {
      const position = subfield.currentTarget.getAttribute('position');
      const information = document.querySelector('.current-status');
      console.log(position);

      this.game.setField(position, this.game.currentTurn);
      const color = this.game.setPlayerColorClass();
      subfield.currentTarget.classList.add(color);




      if(this.game.allImages[this.game.flag].position === position){
        subfield.currentTarget.classList.add('right-answer');
      } else {
        subfield.currentTarget.classList.add('wrong-answer');
      }






      await this.game.checkGameEndWinner().then( (end: boolean) => {
        if(this.game.gameStatus === 0 && end) {
          information.innerHTML = 'Winner is player ' + this.game.currentTurn;
        }
      });

      await this.game.checkGameEndFull().then( (end: boolean) => {
        if(this.game.gameStatus === 0 && end) {
          information.innerHTML = 'You had HOW MANY CORRECT ANSWERS?';
        }
      });

      this.game.changePlayer();

      if (this.game.gameStatus === 1 ){
        this.game.flag++;
        const currentImage = this.game.allImages[this.game.flag].name;
        information.innerHTML = currentImage;
      }
    }


  }

}
