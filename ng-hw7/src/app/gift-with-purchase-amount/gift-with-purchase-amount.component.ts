import { Component, OnInit } from '@angular/core';
import { StrategyInterface } from '../interface/strategy-interface';

@Component({
  selector: 'app-gift-with-purchase-amount',
  templateUrl: './gift-with-purchase-amount.component.html',
  styleUrls: ['./gift-with-purchase-amount.component.css']
})
export class GiftWithPurchaseAmountComponent implements StrategyInterface {
  private fullAmount = 1000;
  private giftAmount = 100;

  discount(amount: number): number {
    return amount - (Math.floor((amount / this.fullAmount)) * this.giftAmount);
  }
}
