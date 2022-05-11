import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormReceiveDataPage } from './form-receive-data.page';

const routes: Routes = [
  {
    path: '',
    component: FormReceiveDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormReceiveDataPageRoutingModule {}
