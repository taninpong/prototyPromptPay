import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferToPage } from './transfer-to.page';

const routes: Routes = [
  {
    path: '',
    component: TransferToPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferToPageRoutingModule {}
