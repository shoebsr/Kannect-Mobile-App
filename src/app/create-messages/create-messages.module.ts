import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateMessagesPageRoutingModule } from './create-messages-routing.module';

import { CreateMessagesPage } from './create-messages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateMessagesPageRoutingModule
  ],
  declarations: [CreateMessagesPage]
})
export class CreateMessagesPageModule {}
