import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactSuccessPage } from './contact-success.page';

describe('ContactSuccessPage', () => {
  let component: ContactSuccessPage;
  let fixture: ComponentFixture<ContactSuccessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
