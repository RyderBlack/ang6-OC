import { Component, Input, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil1',
  templateUrl: './appareil1.component.html',
  styleUrls: ['./appareil1.component.scss']
})
export class Appareil1Component implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

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

  onSwitch() {
    if(this.appareilStatus === 'ON') {
      this.appareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'OFF') {
      this.appareilService.switchOnOne(this.index);
    }
  }

}
