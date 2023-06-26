import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgoProfileNoactivePageRoutingModule } from './ngo-profile-noactive-routing.module';

import { NgoProfileNoactivePage } from './ngo-profile-noactive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgoProfileNoactivePageRoutingModule
  ],
  declarations: [NgoProfileNoactivePage]
})
export class NgoProfileNoactivePageModule {}
