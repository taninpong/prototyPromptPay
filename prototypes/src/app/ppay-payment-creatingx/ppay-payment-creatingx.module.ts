import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpayPaymentCreatingxPageRoutingModule } from './ppay-payment-creatingx-routing.module';

import { PpayPaymentCreatingxPage } from './ppay-payment-creatingx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpayPaymentCreatingxPageRoutingModule
  ],
  declarations: [PpayPaymentCreatingxPage]
})
export class PpayPaymentCreatingxPageModule {}
