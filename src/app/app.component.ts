import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang6-OC';
  isAuth = false;

  appareilOne = 'Dishwasher';
  appareilTwo = '4K TV';
  appareilThree = 'iMac';

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAndoff() {
    console.log('Everything is ON !!');
  }
}
