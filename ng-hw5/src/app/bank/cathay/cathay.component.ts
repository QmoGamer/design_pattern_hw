import { Component, OnInit } from '@angular/core';
import { BankInterface } from '../../interface/bank-interface';

@Component({
  selector: 'app-cathay',
  templateUrl: './cathay.component.html',
  styleUrls: ['./cathay.component.css']
})
export class CathayComponent implements BankInterface {
  allowCardNos = [
    '0001',
    '0002',
  ]

  authorize(cardNo: string): boolean {
    return this.allowCardNos.some((value) => value === cardNo)     
  }
}
