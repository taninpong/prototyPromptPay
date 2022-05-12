import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormInputTemplatePageRoutingModule } from './form-input-template-routing.module';

import { FormInputTemplatePage } from './form-input-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormInputTemplatePageRoutingModule
  ],
  declarations: [FormInputTemplatePage]
})
export class FormInputTemplatePageModule {}
