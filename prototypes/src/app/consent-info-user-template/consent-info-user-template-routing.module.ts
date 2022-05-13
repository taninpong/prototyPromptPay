import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsentInfoUserTemplatePage } from './consent-info-user-template.page';

const routes: Routes = [
  {
    path: '',
    component: ConsentInfoUserTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsentInfoUserTemplatePageRoutingModule {}
