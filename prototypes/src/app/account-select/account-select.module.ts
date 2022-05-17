import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountSelectPageRoutingModule } from './account-select-routing.module';

import { AccountSelectPage } from './account-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AccountSelectPageRoutingModule
  ],
  declarations: [AccountSelectPage]
})
export class AccountSelectPageModule {}
