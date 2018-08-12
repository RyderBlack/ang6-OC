import {
  Subject
} from 'rxjs';

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

}
