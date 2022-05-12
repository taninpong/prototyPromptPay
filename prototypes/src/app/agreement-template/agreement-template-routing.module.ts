import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgreementTemplatePage } from './agreement-template.page';

const routes: Routes = [
  {
    path: '',
    component: AgreementTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgreementTemplatePageRoutingModule {}
