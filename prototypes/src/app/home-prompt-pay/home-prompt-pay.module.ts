import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePromptPayPageRoutingModule } from './home-prompt-pay-routing.module';

import { HomePromptPayPage } from './home-prompt-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePromptPayPageRoutingModule
  ],
  declarations: [HomePromptPayPage]
})
export class HomePromptPayPageModule {}
