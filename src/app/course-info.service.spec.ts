import { TestBed } from '@angular/core/testing';

import { CourseInfoService } from './course-info.service';

describe('CourseInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseInfoService = TestBed.get(CourseInfoService);
    expect(service).toBeTruthy();
  });
});
