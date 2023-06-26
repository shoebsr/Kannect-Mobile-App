import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgoProfileDetailsPage } from './ngo-profile-details.page';

describe('NgoProfileDetailsPage', () => {
  let component: NgoProfileDetailsPage;
  let fixture: ComponentFixture<NgoProfileDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NgoProfileDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
