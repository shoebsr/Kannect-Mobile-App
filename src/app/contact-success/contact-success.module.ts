import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactSuccessPageRoutingModule } from './contact-success-routing.module';

import { ContactSuccessPage } from './contact-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactSuccessPageRoutingModule
  ],
  declarations: [ContactSuccessPage]
})
export class ContactSuccessPageModule {}
