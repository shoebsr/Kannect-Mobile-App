import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventJoinedSuccessPage } from './event-joined-success.page';

describe('EventJoinedSuccessPage', () => {
  let component: EventJoinedSuccessPage;
  let fixture: ComponentFixture<EventJoinedSuccessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EventJoinedSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
