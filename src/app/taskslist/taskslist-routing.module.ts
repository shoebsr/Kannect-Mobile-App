import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskslistPage } from './taskslist.page';

const routes: Routes = [
  {
    path: '',
    component: TaskslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskslistPageRoutingModule {}
