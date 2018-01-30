import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardAuthorizeComponent } from './card-authorize/card-authorize.component';
import { CathayComponent } from './bank/cathay/cathay.component';
import { CtbcComponent } from './bank/ctbc/ctbc.component';
import { NcccComponent } from './bank/nccc/nccc.component';


@NgModule({
  declarations: [
    AppComponent,
    CardAuthorizeComponent,
    CathayComponent,
    CtbcComponent,
    NcccComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
