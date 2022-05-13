import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsentInfoManagerTemplatePage } from './consent-info-manager-template.page';

const routes: Routes = [
  {
    path: '',
    component: ConsentInfoManagerTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsentInfoManagerTemplatePageRoutingModule {}
