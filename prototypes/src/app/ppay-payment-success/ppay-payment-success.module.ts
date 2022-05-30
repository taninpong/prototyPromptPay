import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpayPaymentSuccessPageRoutingModule } from './ppay-payment-success-routing.module';

import { PpayPaymentSuccessPage } from './ppay-payment-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PpayPaymentSuccessPageRoutingModule
  ],
  declarations: [PpayPaymentSuccessPage]
})
export class PpayPaymentSuccessPageModule {}
