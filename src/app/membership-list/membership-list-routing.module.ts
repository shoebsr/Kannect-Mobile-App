import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembershipListPage } from './membership-list.page';

const routes: Routes = [
  {
    path: '',
    component: MembershipListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembershipListPageRoutingModule {}
