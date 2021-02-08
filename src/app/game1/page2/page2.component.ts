import { Component } from '@angular/core';
import { Game1logic } from 'src/app/game1logic';
import { Game2logic } from 'src/app/game2logic';
import { Status } from 'src/app/game1status';

@Component({
  selector: 'app-game1',
  templateUrl: './page2.component.html',
  styleUrls: ['../game1.component.scss'],
  providers: [Game2logic]
})

export class Page2Component {

  constructor(public game: Game2logic) { }


  startGame(): void{
    this.game.gameStatus = Status.START;
    this.game.gameStart();
    console.log(this.game.correctOrder);
  }


  async clickSubfield (subfield: any): Promise<void> {
    if(this.game.gameStatus === 1) {
      const position = subfield.currentTarget.getAttribute('position');
      const information = document.querySelector('.current-status');




      if(this.game.allImages[this.game.flag].position === position){
        subfield.currentTarget.classList.add('right-answer');
        //this.game.correctAnswers++;
      } else {
        subfield.currentTarget.classList.add('wrong-answer');
        //this.game.wrongAnswers++;
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
    }


  }
}
