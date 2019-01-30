import { Component } from '@angular/core';
import { CourseInfoService } from "../course-info.service";
import { PlayerInfo } from "../player-info";
import { PlayerInfoService } from "../player-info.service";


@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})



export class CourseInfoComponent {
  
  players: Array<PlayerInfo>;
  public course;
  public courseID;
  public selectedTee;
  

  constructor(
    private playerInfoService: PlayerInfoService,
    private courseInfoService: CourseInfoService
  ) {
  }

  ngOnInit() {
    this.loadPlayers();
    this.loadCourseTees();
  }

  selectTees(SelectedTees){
    this.selectedTee = SelectedTees;
  }

  loadPlayers() {
    this.playerInfoService.loadPlayers().subscribe(players => this.players = players);
  }

  loadCourseTees() {
    this.courseInfoService.loadCourseInfo().subscribe(data => {
      this.course = data['data'];
      this.selectedTee = '1';
    });
  }

 

  outTotal(player){
    let sum = 0;
    for(let i = 0; i < 9; i++){
      sum += player[i];
    }
    return sum;
  }

  inTotal(player){
    let sum = 0;
    for(let j = 0; j < 9; j++){
      sum += player[j];
    }
    return sum;
  }

 totalOut(player){
    let sum = 0;
    for(let i = 0; i < 9; i++){
      sum += player[i];
    }
    return sum;
  }

  totalIn(player){
    let sum = 0;
    for(let j = 0; j < 9; j++){
      sum += player[j];
    }
    return sum;
  }

  totalScoreOut(){

  }

  saveScoresOut(player){
    this.playerInfoService.updatePlayerInfo(player);
    
  }

  totalScoreIn(){

  }

  saveScoresIn(player){
    this.playerInfoService.updatePlayerInfo(player);
  }

}



