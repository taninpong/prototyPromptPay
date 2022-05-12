import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormInputTemplatePage } from './form-input-template.page';

const routes: Routes = [
  {
    path: '',
    component: FormInputTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormInputTemplatePageRoutingModule {}
