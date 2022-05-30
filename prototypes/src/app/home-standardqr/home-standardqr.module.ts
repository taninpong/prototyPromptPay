import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeStandardqrPageRoutingModule } from './home-standardqr-routing.module';

import { HomeStandardqrPage } from './home-standardqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeStandardqrPageRoutingModule
  ],
  declarations: [HomeStandardqrPage]
})
export class HomeStandardqrPageModule {}
