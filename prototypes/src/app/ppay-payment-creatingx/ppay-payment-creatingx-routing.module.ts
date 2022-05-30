import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpayPaymentCreatingxPage } from './ppay-payment-creatingx.page';

const routes: Routes = [
  {
    path: '',
    component: PpayPaymentCreatingxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpayPaymentCreatingxPageRoutingModule {}
