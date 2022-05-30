import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpayPaymentDetailxPageRoutingModule } from './ppay-payment-detailx-routing.module';

import { PpayPaymentDetailxPage } from './ppay-payment-detailx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpayPaymentDetailxPageRoutingModule
  ],
  declarations: [PpayPaymentDetailxPage]
})
export class PpayPaymentDetailxPageModule {}
