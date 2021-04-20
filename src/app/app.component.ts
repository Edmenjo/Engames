import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'engames';

  constructor(private navService: NavigationService) {
    localStorage.setItem('dialog', '0');
   }

  toggleSideNav() {
    this.navService.setShowNav(false);
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
