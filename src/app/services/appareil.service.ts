import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppareilService {

  appareilsSubject = new Subject < any[] > ();

  private appareils = [{
      id: 1,
      name: 'Dishwasher',
      status: 'OFF'
    },
    {
      id: 2,
      name: '4K TV',
      status: 'OFF'
    },
    {
      id: 3,
      name: 'iMac',
      status: 'ON'
    }
  ];

  constructor(private httpClient: HttpClient) {}

  saveAppareilsToServer() {
    this.httpClient
      .post('https://appgular6-oc.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Saving done !');
        },
        (error) => {
          console.log('Error ! : ' + error);
        }
      );
}

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'ON';
      this.emitAppareilSubject;
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'OFF';
      this.emitAppareilSubject;
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'ON';
    this.emitAppareilSubject;
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'OFF';
    this.emitAppareilSubject;
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
}

}
