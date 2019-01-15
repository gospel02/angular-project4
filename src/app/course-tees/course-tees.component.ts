import { Component, OnInit } from '@angular/core';
import { CourseInfoService } from '../course-info.service';

@Component({
  selector: 'app-course-tees',
  templateUrl: './course-tees.component.html',
  styleUrls: ['./course-tees.component.css']
})
export class CourseTeesComponent implements OnInit {
  public course;
  public tee;
  

  constructor(
    private courseInfoService: CourseInfoService
  ) { }

  ngOnInit() {
    
    
  }

  changeTee(chosenTee){
    this.tee = chosenTee;
    console.log("Changed to tee #" + chosenTee);
  }


}
