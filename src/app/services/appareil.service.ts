export class AppareilService {
    appareils = [
        {
          name: 'Dishwasher',
          status: 'OFF'
        },
        {
          name: '4K TV',
          status: 'OFF'
        },
        {
          name: 'iMac',
          status: 'ON'
        }
      ];

      switchOnAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'ON';
        }
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'OFF';
        }
    }

    switchOnOne(i: number) {
        this.appareils[i].status = 'ON';
    }
    
    switchOffOne(i: number) {
        this.appareils[i].status = 'OFF';
    }

}
