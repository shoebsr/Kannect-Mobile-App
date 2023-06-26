import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventJoinedSuccessPage } from './event-joined-success.page';

const routes: Routes = [
  {
    path: '',
    component: EventJoinedSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventJoinedSuccessPageRoutingModule {}
