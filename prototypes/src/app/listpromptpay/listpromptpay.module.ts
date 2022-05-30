import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListpromptpayPageRoutingModule } from './listpromptpay-routing.module';

import { ListpromptpayPage } from './listpromptpay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ListpromptpayPageRoutingModule
  ],
  declarations: [ListpromptpayPage]
})
export class ListpromptpayPageModule {}
