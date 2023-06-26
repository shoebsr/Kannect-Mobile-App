import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactSuccessPage } from './contact-success.page';

const routes: Routes = [
  {
    path: '',
    component: ContactSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactSuccessPageRoutingModule {}
