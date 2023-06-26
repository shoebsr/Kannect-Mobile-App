import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgoProfileDetailsPageRoutingModule } from './ngo-profile-details-routing.module';

import { NgoProfileDetailsPage } from './ngo-profile-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgoProfileDetailsPageRoutingModule
  ],
  declarations: [NgoProfileDetailsPage]
})
export class NgoProfileDetailsPageModule {}
