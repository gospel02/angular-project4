import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/index";



@Injectable({
  providedIn: 'root'
})
export class CourseInfoService {
  
  constructor(private httpClient: HttpClient) { }

  loadCourseInfo(){
    return this.httpClient.get('https://golf-courses-api.herokuapp.com/courses/11819');
  }

}
