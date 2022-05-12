import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConditionTemplatePage } from './condition-template.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionTemplatePageRoutingModule {}
