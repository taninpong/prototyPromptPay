import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartEditTemplatePage } from './cart-edit-template.page';

const routes: Routes = [
  {
    path: '',
    component: CartEditTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartEditTemplatePageRoutingModule {}
