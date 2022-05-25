import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountBankSelect2Page } from './account-bank-select2.page';

const routes: Routes = [
  {
    path: '',
    component: AccountBankSelect2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountBankSelect2PageRoutingModule {}
