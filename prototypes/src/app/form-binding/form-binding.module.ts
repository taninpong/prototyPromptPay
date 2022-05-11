import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormBindingPageRoutingModule } from './form-binding-routing.module';

import { FormBindingPage } from './form-binding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormBindingPageRoutingModule
  ],
  declarations: [FormBindingPage]
})
export class FormBindingPageModule {}
