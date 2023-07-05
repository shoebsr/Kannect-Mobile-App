import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembershipListPageRoutingModule } from './membership-list-routing.module';

import { MembershipListPage } from './membership-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembershipListPageRoutingModule
  ],
  declarations: [MembershipListPage]
})
export class MembershipListPageModule {}
