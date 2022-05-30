import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpayPaymentEslipPageRoutingModule } from './ppay-payment-eslip-routing.module';

import { PpayPaymentEslipPage } from './ppay-payment-eslip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PpayPaymentEslipPageRoutingModule
  ],
  declarations: [PpayPaymentEslipPage]
})
export class PpayPaymentEslipPageModule {}
