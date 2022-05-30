import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpayPaymentEslipPage } from './ppay-payment-eslip.page';

const routes: Routes = [
  {
    path: '',
    component: PpayPaymentEslipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpayPaymentEslipPageRoutingModule {}
