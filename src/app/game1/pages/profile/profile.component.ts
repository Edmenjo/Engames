import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  profileChoosed: string = "";
  characterAcc1: string = "mexican hat";

  constructor() { }

  ngOnInit(): void {
  }

  pj1(){
    this.profileChoosed = this.characterAcc1;
  }
}
