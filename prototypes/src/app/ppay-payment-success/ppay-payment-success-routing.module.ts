import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpayPaymentSuccessPage } from './ppay-payment-success.page';

const routes: Routes = [
  {
    path: '',
    component: PpayPaymentSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpayPaymentSuccessPageRoutingModule {}
