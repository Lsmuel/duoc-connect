import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerayudantiaPageRoutingModule } from './verayudantia-routing.module';

import { VerayudantiaPage } from './verayudantia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerayudantiaPageRoutingModule
  ],
  declarations: [VerayudantiaPage]
})
export class VerayudantiaPageModule {}
