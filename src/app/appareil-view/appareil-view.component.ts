import { Component, OnInit, OnDestroy } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})

export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils: any[];
  appareilSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService) {
   
   }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
   
    //Fetch and save data
    this.appareilService.getAppareilsFromServer();
    this.appareilService.saveAppareilsToServer();
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

  onSave() {
    this.appareilService.saveAppareilsToServer();
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

}

