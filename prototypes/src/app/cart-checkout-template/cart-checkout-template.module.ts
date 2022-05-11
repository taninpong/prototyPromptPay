import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartCheckoutTemplatePageRoutingModule } from './cart-checkout-template-routing.module';

import { CartCheckoutTemplatePage } from './cart-checkout-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartCheckoutTemplatePageRoutingModule
  ],
  declarations: [CartCheckoutTemplatePage]
})
export class CartCheckoutTemplatePageModule {}
