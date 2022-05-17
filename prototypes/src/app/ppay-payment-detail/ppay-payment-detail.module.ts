import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpayPaymentDetailPageRoutingModule } from './ppay-payment-detail-routing.module';

import { PpayPaymentDetailPage } from './ppay-payment-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PpayPaymentDetailPageRoutingModule
  ],
  declarations: [PpayPaymentDetailPage]
})
export class PpayPaymentDetailPageModule { }
