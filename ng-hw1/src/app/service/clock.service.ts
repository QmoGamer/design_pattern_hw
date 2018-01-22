import { Injectable } from '@angular/core';
import { SubjectInterface } from '../interface/subject-interface';
import { ObserverInterface } from '../interface/observer-interface';

@Injectable()
export class ClockService implements SubjectInterface {
  private observers: ObserverInterface[] = [];

  constructor() {
    setInterval(() => this.tick(), 1000);
  }

  addObserver(observer: ObserverInterface): void {
    this.observers.push(observer);
  }

  removeObserver(observer: ObserverInterface): void {
    this.observers = this.observers.filter(value => value !== observer);
  }

  private tick(): void {
    this.observers.forEach(observer => observer.update(new Date()));
  }
}
