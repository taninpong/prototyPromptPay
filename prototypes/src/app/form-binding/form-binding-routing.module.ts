import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormBindingPage } from './form-binding.page';

const routes: Routes = [
  {
    path: '',
    component: FormBindingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormBindingPageRoutingModule {}
