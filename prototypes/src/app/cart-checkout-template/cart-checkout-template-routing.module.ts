import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartCheckoutTemplatePage } from './cart-checkout-template.page';

const routes: Routes = [
  {
    path: '',
    component: CartCheckoutTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartCheckoutTemplatePageRoutingModule {}
