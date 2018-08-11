export class AppareilService {
    appareils = [
        {
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

    getAppareilById(id: number) {
      const appareil = this.appareils.find(
        (s) => {
          return s.id === id;
        }
      );
      return appareil;
  }

}
