import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil1',
  templateUrl: './appareil1.component.html',
  styleUrls: ['./appareil1.component.scss']
})
export class Appareil1Component implements OnInit {

  appareilName: string = 'Dishwasher';
  appareilStatus: string = 'OFF';

  constructor() { }

  ngOnInit() {
  }

}
