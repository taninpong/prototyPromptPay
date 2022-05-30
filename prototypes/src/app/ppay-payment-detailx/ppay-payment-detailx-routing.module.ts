import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpayPaymentDetailxPage } from './ppay-payment-detailx.page';

const routes: Routes = [
  {
    path: '',
    component: PpayPaymentDetailxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpayPaymentDetailxPageRoutingModule {}
