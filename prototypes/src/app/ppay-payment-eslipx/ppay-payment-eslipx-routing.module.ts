import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpayPaymentEslipxPage } from './ppay-payment-eslipx.page';

const routes: Routes = [
  {
    path: '',
    component: PpayPaymentEslipxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpayPaymentEslipxPageRoutingModule {}
