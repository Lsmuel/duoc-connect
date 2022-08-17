import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerayudantiaPage } from './verayudantia.page';

const routes: Routes = [
  {
    path: '',
    component: VerayudantiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerayudantiaPageRoutingModule {}
