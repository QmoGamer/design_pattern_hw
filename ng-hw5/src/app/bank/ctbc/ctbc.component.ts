import { Component, OnInit } from '@angular/core';
import { BankInterface } from '../../interface/bank-interface';

@Component({
  selector: 'app-ctbc',
  templateUrl: './ctbc.component.html',
  styleUrls: ['./ctbc.component.css']
})
export class CtbcComponent implements BankInterface {
  allowCardNos = [
    '0003',
    '0004',
  ]

  authorize(cardNo: string): boolean {
    return this.allowCardNos.some((value) => value === cardNo)     
  }
}
