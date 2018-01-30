import { Component } from '@angular/core';
import { BankInterface } from '../interface/bank-interface';
import { CathayComponent } from '../bank/cathay/cathay.component';
import { CtbcComponent } from '../bank/ctbc/ctbc.component';
import { NcccComponent } from '../bank/nccc/nccc.component';

@Component({
  selector: 'app-card-authorize',
  templateUrl: './card-authorize.component.html',
  styleUrls: ['./card-authorize.component.css']
})
export class CardAuthorizeComponent {
  banks = [
    '國泰',
    '中信',
    'NCCC',
  ];
  selectbank = '國泰';
  value = false;
  cardNo: string;

  static createBank(type: string): BankInterface {
    if (type === '國泰') {
      return new CathayComponent();
    }

    if (type === '中信') {
      return new CtbcComponent();
    }

    if (type === 'NCCC') {
      return new NcccComponent();
    }
  } 
  
  submit() {
    const strategy = CardAuthorizeComponent.createBank(this.selectbank);
    this.value = strategy.authorize(this.cardNo);
  }
}
