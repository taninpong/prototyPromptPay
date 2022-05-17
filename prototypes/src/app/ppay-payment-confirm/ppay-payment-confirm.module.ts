import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpayPaymentConfirmPageRoutingModule } from './ppay-payment-confirm-routing.module';

import { PpayPaymentConfirmPage } from './ppay-payment-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PpayPaymentConfirmPageRoutingModule
  ],
  declarations: [PpayPaymentConfirmPage]
})
export class PpayPaymentConfirmPageModule {}
