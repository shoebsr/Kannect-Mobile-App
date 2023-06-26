import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgoProfileDetailsPage } from './ngo-profile-details.page';

const routes: Routes = [
  {
    path: '',
    component: NgoProfileDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgoProfileDetailsPageRoutingModule {}
