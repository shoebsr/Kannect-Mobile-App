import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembershipListPage } from './membership-list.page';

describe('MembershipListPage', () => {
  let component: MembershipListPage;
  let fixture: ComponentFixture<MembershipListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MembershipListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
