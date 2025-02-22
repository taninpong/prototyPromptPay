import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormReceiveDataPageRoutingModule } from './form-receive-data-routing.module';

import { FormReceiveDataPage } from './form-receive-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormReceiveDataPageRoutingModule
  ],
  declarations: [FormReceiveDataPage]
})
export class FormReceiveDataPageModule {}
