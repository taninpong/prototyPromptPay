import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormSendDataPage } from './form-send-data.page';

const routes: Routes = [
  {
    path: '',
    component: FormSendDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormSendDataPageRoutingModule {}
