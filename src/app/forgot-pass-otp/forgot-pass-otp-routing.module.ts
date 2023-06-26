import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPassOtpPage } from './forgot-pass-otp.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPassOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPassOtpPageRoutingModule {}
