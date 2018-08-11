import { Component, OnInit, Input } from '@angular/core';
import {AppareilService} from '../services/appareil.service'

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})

export class AppareilViewComponent implements OnInit {
  isAuth = false;
  appareils: any[];
  @Input() id: number;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

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

