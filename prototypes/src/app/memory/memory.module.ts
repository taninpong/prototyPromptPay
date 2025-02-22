import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemoryPageRoutingModule } from './memory-routing.module';

import { MemoryPage } from './memory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MemoryPageRoutingModule
  ],
  declarations: [MemoryPage]
})
export class MemoryPageModule {}
