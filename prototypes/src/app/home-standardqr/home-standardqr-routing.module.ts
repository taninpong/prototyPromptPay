import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeStandardqrPage } from './home-standardqr.page';

const routes: Routes = [
  {
    path: '',
    component: HomeStandardqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeStandardqrPageRoutingModule {}
