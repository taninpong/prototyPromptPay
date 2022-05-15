import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpayPaymentDetailPage } from './ppay-payment-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PpayPaymentDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpayPaymentDetailPageRoutingModule {}
