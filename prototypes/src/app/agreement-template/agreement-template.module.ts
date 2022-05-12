import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgreementTemplatePageRoutingModule } from './agreement-template-routing.module';

import { AgreementTemplatePage } from './agreement-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgreementTemplatePageRoutingModule
  ],
  declarations: [AgreementTemplatePage]
})
export class AgreementTemplatePageModule {}
