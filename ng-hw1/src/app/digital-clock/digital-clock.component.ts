import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { SubjectInterface } from '../interface/subject-interface';
import { SubjectInterfaceToken } from '../interface/injection-token';
import { ObserverInterface } from '../interface/observer-interface';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements ObserverInterface, OnInit, OnDestroy {
  now = new Date();

  constructor(@Inject(SubjectInterfaceToken)
              private clockService: SubjectInterface) {
  }

  ngOnInit() {
    this.clockService.addObserver(this);
  }

  ngOnDestroy() {
    this.clockService.removeObserver(this);
  }

  update(date: Date) {
    this.now = date;
  }

  mathFloor(value) {
    return Math.floor(value);
  }

}
