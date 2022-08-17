import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChattPage } from './chatt.page';

const routes: Routes = [
  {
    path: '',
    component: ChattPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChattPageRoutingModule {}
