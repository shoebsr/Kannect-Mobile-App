import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassOtpPageRoutingModule } from './forgot-pass-otp-routing.module';

import { ForgotPassOtpPage } from './forgot-pass-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassOtpPageRoutingModule
  ],
  declarations: [ForgotPassOtpPage]
})
export class ForgotPassOtpPageModule {}
