import { Component, OnInit } from '@angular/core';
import { CourseInfoService } from '../course-info.service';

@Component({
  selector: 'app-course-tees',
  templateUrl: './course-tees.component.html',
  styleUrls: ['./course-tees.component.css']
})
export class CourseTeesComponent implements OnInit {

  

  constructor(
    private courseInfoService: CourseInfoService
  ) { }

  ngOnInit() {

  }

}


