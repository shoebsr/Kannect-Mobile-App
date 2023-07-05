import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeNumberPageRoutingModule } from './change-number-routing.module';

import { ChangeNumberPage } from './change-number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeNumberPageRoutingModule
  ],
  declarations: [ChangeNumberPage]
})
export class ChangeNumberPageModule {}
