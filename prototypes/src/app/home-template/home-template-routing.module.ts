import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTemplatePage } from './home-template.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTemplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTemplatePageRoutingModule {}
