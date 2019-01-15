import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTeesComponent } from './course-tees.component';

describe('CourseTeesComponent', () => {
  let component: CourseTeesComponent;
  let fixture: ComponentFixture<CourseTeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
