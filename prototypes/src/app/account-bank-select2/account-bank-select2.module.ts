import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountBankSelect2PageRoutingModule } from './account-bank-select2-routing.module';

import { AccountBankSelect2Page } from './account-bank-select2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AccountBankSelect2PageRoutingModule
  ],
  declarations: [AccountBankSelect2Page]
})
export class AccountBankSelect2PageModule {}
