import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePromptPayPage } from './home-prompt-pay.page';

const routes: Routes = [
  {
    path: '',
    component: HomePromptPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePromptPayPageRoutingModule {}
