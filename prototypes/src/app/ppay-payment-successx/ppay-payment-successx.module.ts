import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpayPaymentSuccessxPageRoutingModule } from './ppay-payment-successx-routing.module';

import { PpayPaymentSuccessxPage } from './ppay-payment-successx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpayPaymentSuccessxPageRoutingModule
  ],
  declarations: [PpayPaymentSuccessxPage]
})
export class PpayPaymentSuccessxPageModule {}
