import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionDialogTemplatePageRoutingModule } from './option-dialog-template-routing.module';

import { OptionDialogTemplatePage } from './option-dialog-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionDialogTemplatePageRoutingModule
  ],
  declarations: [OptionDialogTemplatePage]
})
export class OptionDialogTemplatePageModule {}
