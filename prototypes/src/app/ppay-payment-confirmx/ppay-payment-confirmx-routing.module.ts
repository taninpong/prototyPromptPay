import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpayPaymentConfirmxPage } from './ppay-payment-confirmx.page';

const routes: Routes = [
  {
    path: '',
    component: PpayPaymentConfirmxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpayPaymentConfirmxPageRoutingModule {}
