import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgoProfileNoactivePage } from './ngo-profile-noactive.page';

describe('NgoProfileNoactivePage', () => {
  let component: NgoProfileNoactivePage;
  let fixture: ComponentFixture<NgoProfileNoactivePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NgoProfileNoactivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
