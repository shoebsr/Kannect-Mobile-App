import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskslistPageRoutingModule } from './taskslist-routing.module';

import { TaskslistPage } from './taskslist.page';
import { FooterPageModule } from '../footer/footer.module';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskslistPageRoutingModule,
    FooterPageModule,
  ],
  declarations: [TaskslistPage],
  exports: [FooterPage],
})
export class TaskslistPageModule {}
