import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpayPaymentConfirmxPageRoutingModule } from './ppay-payment-confirmx-routing.module';

import { PpayPaymentConfirmxPage } from './ppay-payment-confirmx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpayPaymentConfirmxPageRoutingModule
  ],
  declarations: [PpayPaymentConfirmxPage]
})
export class PpayPaymentConfirmxPageModule {}
