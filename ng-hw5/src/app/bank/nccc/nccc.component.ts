import { Component, OnInit } from '@angular/core';
import { BankInterface } from '../../interface/bank-interface';

@Component({
  selector: 'app-nccc',
  templateUrl: './nccc.component.html',
  styleUrls: ['./nccc.component.css']
})
export class NcccComponent implements BankInterface {
  allowCardNos = [
    '0008',
    '0009',
  ]

  authorize(cardNo: string): boolean {
    return this.allowCardNos.some((value) => value === cardNo)     
  }
}
