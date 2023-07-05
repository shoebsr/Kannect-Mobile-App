import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeNumberSuccessPage } from './change-number-success.page';

describe('ChangeNumberSuccessPage', () => {
  let component: ChangeNumberSuccessPage;
  let fixture: ComponentFixture<ChangeNumberSuccessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChangeNumberSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
