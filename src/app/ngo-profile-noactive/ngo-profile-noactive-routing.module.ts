import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgoProfileNoactivePage } from './ngo-profile-noactive.page';

const routes: Routes = [
  {
    path: '',
    component: NgoProfileNoactivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgoProfileNoactivePageRoutingModule {}
