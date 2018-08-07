import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil1',
  templateUrl: './appareil1.component.html',
  styleUrls: ['./appareil1.component.scss']
})
export class Appareil1Component implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'ON') {
      return 'green';
    } else if(this.appareilStatus === 'OFF') {
      return 'red';
    }
}

}
