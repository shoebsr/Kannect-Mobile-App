import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPassOtpPage } from './forgot-pass-otp.page';

describe('ForgotPassOtpPage', () => {
  let component: ForgotPassOtpPage;
  let fixture: ComponentFixture<ForgotPassOtpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgotPassOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
