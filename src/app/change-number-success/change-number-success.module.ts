import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeNumberSuccessPageRoutingModule } from './change-number-success-routing.module';

import { ChangeNumberSuccessPage } from './change-number-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeNumberSuccessPageRoutingModule
  ],
  declarations: [ChangeNumberSuccessPage]
})
export class ChangeNumberSuccessPageModule {}
