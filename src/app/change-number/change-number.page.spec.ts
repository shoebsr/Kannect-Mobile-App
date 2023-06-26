import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeNumberPage } from './change-number.page';

describe('ChangeNumberPage', () => {
  let component: ChangeNumberPage;
  let fixture: ComponentFixture<ChangeNumberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChangeNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
