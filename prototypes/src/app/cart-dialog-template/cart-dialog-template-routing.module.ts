import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartDialogTemplatePage } from './cart-dialog-template.page';

const routes: Routes = [
  {
    path: '',
    component: CartDialogTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartDialogTemplatePageRoutingModule {}
