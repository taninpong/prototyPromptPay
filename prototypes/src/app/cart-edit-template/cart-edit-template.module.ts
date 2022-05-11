import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartEditTemplatePageRoutingModule } from './cart-edit-template-routing.module';

import { CartEditTemplatePage } from './cart-edit-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartEditTemplatePageRoutingModule
  ],
  declarations: [CartEditTemplatePage]
})
export class CartEditTemplatePageModule {}
