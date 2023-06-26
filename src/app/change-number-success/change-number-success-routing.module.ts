import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeNumberSuccessPage } from './change-number-success.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeNumberSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeNumberSuccessPageRoutingModule {}
