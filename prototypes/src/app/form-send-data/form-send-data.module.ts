import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormSendDataPageRoutingModule } from './form-send-data-routing.module';

import { FormSendDataPage } from './form-send-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormSendDataPageRoutingModule
  ],
  declarations: [FormSendDataPage]
})
export class FormSendDataPageModule {}
