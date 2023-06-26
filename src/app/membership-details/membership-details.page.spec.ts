import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembershipDetailsPage } from './membership-details.page';

describe('MembershipDetailsPage', () => {
  let component: MembershipDetailsPage;
  let fixture: ComponentFixture<MembershipDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MembershipDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
