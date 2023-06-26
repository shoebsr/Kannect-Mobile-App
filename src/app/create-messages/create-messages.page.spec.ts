import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateMessagesPage } from './create-messages.page';

describe('CreateMessagesPage', () => {
  let component: CreateMessagesPage;
  let fixture: ComponentFixture<CreateMessagesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateMessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
