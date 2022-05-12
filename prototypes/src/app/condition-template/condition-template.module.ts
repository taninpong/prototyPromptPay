import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionTemplatePageRoutingModule } from './condition-template-routing.module';

import { ConditionTemplatePage } from './condition-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionTemplatePageRoutingModule
  ],
  declarations: [ConditionTemplatePage]
})
export class ConditionTemplatePageModule {}
