import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { GiftWithPurchaseAmountComponent } from './gift-with-purchase-amount/gift-with-purchase-amount.component';
import { PercentOffComponent } from './percent-off/percent-off.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    GiftWithPurchaseAmountComponent,
    PercentOffComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }