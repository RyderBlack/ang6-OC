import { Component, OnInit } from '@angular/core';
import {AppareilService} from './services/appareil.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ang6-OC';
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onOn() {
    this.appareilService.switchOnAll();
  }

  onOff() {
    if(confirm('Are you sure you want to turn off the appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
}
