import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormTemplatePage } from './form-template.page';

const routes: Routes = [
  {
    path: '',
    component: FormTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormTemplatePageRoutingModule {}
