import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateMessagesPage } from './create-messages.page';

const routes: Routes = [
  {
    path: '',
    component: CreateMessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateMessagesPageRoutingModule {}
