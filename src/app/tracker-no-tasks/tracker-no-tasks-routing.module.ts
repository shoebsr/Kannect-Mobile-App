import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackerNoTasksPage } from './tracker-no-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: TrackerNoTasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackerNoTasksPageRoutingModule {}
