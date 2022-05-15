import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferToPageRoutingModule } from './transfer-to-routing.module';

import { TransferToPage } from './transfer-to.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferToPageRoutingModule
  ],
  declarations: [TransferToPage]
})
export class TransferToPageModule {}
