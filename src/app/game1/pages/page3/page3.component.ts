import { Component } from '@angular/core';
import { Game2logic } from 'src/app/game2logic';
import imagesData from '../data/images.json';
import wordsToChoose from '../data/words.json';

@Component({
  selector: 'app-game1',
  templateUrl: './page3.component.html',
  styleUrls: ['../../game1.component.scss'],
  providers: [Game2logic]
})

export class Page3Component {

  Images: any = imagesData;
  Words: any = wordsToChoose;

  constructor(public game: Game2logic) { }
}
