import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/index";
import { CourseInfo } from './course-info';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CourseInfoService {

  
  
  constructor(private httpClient: HttpClient) { }

  loadCoursesInfo(): Observable<CourseInfo[]> {
    return this.httpClient.get<CourseInfo[]>('https://golf-courses-api.herokuapp.com/courses')
    .pipe(
      map(
          (response: any) => {
            return response.courses;
          }
        )
      );
  };

  loadCourseInfo(): Observable<any>{
    return this.httpClient.get('https://golf-courses-api.herokuapp.com/courses/11819');
  }

  }
