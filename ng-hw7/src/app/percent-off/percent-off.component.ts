import { Component } from '@angular/core';
import { StrategyInterface } from '../interface/strategy-interface';

@Component({
  selector: 'app-percent-off',
  templateUrl: './percent-off.component.html',
  styleUrls: ['./percent-off.component.css']
})
export class PercentOffComponent implements StrategyInterface {
  private percent = 0.8;

  discount(amount: number): number {
    return Math.floor(amount * this.percent);
  }
}
