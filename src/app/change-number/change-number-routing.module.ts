import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeNumberPage } from './change-number.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeNumberPageRoutingModule {}
