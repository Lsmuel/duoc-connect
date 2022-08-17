import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChattPageRoutingModule } from './chatt-routing.module';

import { ChattPage } from './chatt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChattPageRoutingModule
  ],
  declarations: [ChattPage]
})
export class ChattPageModule {}
