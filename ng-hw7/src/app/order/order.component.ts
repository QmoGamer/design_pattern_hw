import { Component, OnInit } from '@angular/core';
import { StrategyInterface } from '../interface/strategy-interface';
import { PercentOffComponent } from '../percent-off/percent-off.component';
import { GiftWithPurchaseAmountComponent } from '../gift-with-purchase-amount/gift-with-purchase-amount.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  strategies = [
    'PercentOff',
    'GiftWithPurchaseAmount',
  ];
  discountStrategy = 'PercentOff';
  subtotal = 1000;
  discountAmount: number;
  total: number;

  static createStrategy(type: string): StrategyInterface {
    if (type === 'PercentOff') {
      return new PercentOffComponent();
    }

    if (type === 'GiftWithPurchaseAmount') {
      return new GiftWithPurchaseAmountComponent();
    }
  }

  submit() {
    const strategy = OrderComponent.createStrategy(this.discountStrategy);
    this.total = strategy.discount(this.subtotal);
    this.discountAmount = this.subtotal - this.total;
  }
}
