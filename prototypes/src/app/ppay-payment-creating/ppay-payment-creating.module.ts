import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpayPaymentCreatingPageRoutingModule } from './ppay-payment-creating-routing.module';

import { PpayPaymentCreatingPage } from './ppay-payment-creating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpayPaymentCreatingPageRoutingModule
  ],
  declarations: [PpayPaymentCreatingPage]
})
export class PpayPaymentCreatingPageModule {}
