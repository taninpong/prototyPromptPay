import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormTemplatePageRoutingModule } from './form-template-routing.module';

import { FormTemplatePage } from './form-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormTemplatePageRoutingModule
  ],
  declarations: [FormTemplatePage]
})
export class FormTemplatePageModule {}
