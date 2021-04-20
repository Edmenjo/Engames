import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileChoosed: string = "";
  pj1name: string = "wood";

  constructor() { }

  ngOnInit(): void {
  }

  pj1(){
    this.profileChoosed = this.pj1name;
  }
}
