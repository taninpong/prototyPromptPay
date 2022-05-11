import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionDialogTemplatePage } from './option-dialog-template.page';

const routes: Routes = [
  {
    path: '',
    component: OptionDialogTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionDialogTemplatePageRoutingModule {}
