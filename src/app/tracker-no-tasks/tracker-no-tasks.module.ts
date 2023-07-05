import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackerNoTasksPageRoutingModule } from './tracker-no-tasks-routing.module';

import { TrackerNoTasksPage } from './tracker-no-tasks.page';
import { FooterPageModule } from '../footer/footer.module';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackerNoTasksPageRoutingModule,
    FooterPageModule,
  ],
  declarations: [TrackerNoTasksPage],
  exports: [FooterPage],
})
export class TrackerNoTasksPageModule {}
