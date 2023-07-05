import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass-otp',
  templateUrl: './forgot-pass-otp.page.html',
  styleUrls: ['./forgot-pass-otp.page.scss'],
})

export class ForgotPassOtpPage implements OnInit {
  
  constructor(public router: Router) {}

  ngOnInit() {}

  goTosetpass() {
    this.router.navigate([`set-new-password`]);
  }
}
