import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskslistPage } from './taskslist.page';

describe('TaskslistPage', () => {
  let component: TaskslistPage;
  let fixture: ComponentFixture<TaskslistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TaskslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
