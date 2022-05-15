import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpayPaymentDetailPageRoutingModule } from './ppay-payment-detail-routing.module';

import { PpayPaymentDetailPage } from './ppay-payment-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpayPaymentDetailPageRoutingModule
  ],
  declarations: [PpayPaymentDetailPage]
})
export class PpayPaymentDetailPageModule {}
