import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventJoinedSuccessPageRoutingModule } from './event-joined-success-routing.module';

import { EventJoinedSuccessPage } from './event-joined-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventJoinedSuccessPageRoutingModule
  ],
  declarations: [EventJoinedSuccessPage]
})
export class EventJoinedSuccessPageModule {}
