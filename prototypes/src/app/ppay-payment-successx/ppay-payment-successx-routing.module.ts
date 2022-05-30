import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpayPaymentSuccessxPage } from './ppay-payment-successx.page';

const routes: Routes = [
  {
    path: '',
    component: PpayPaymentSuccessxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpayPaymentSuccessxPageRoutingModule {}
