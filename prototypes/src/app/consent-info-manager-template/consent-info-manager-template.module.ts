import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsentInfoManagerTemplatePageRoutingModule } from './consent-info-manager-template-routing.module';

import { ConsentInfoManagerTemplatePage } from './consent-info-manager-template.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsentInfoManagerTemplatePageRoutingModule
  ],
  declarations: [ConsentInfoManagerTemplatePage]
})
export class ConsentInfoManagerTemplatePageModule {}
