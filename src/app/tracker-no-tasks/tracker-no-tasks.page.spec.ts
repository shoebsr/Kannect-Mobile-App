import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackerNoTasksPage } from './tracker-no-tasks.page';

describe('TrackerNoTasksPage', () => {
  let component: TrackerNoTasksPage;
  let fixture: ComponentFixture<TrackerNoTasksPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrackerNoTasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
