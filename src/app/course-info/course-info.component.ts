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
      this.selectedTee = '2';
      console.log(data);
    });
  }

 

  outTotal(player: any){
    let sum = 0;
    for(let i = 0; i < 9; i++){
      sum += player[i];
    }
    return sum;
  }

  totalScoreOut(){

  }

  saveScoresOut(player: any){
    this.playerInfoService.updatePlayerInfo(player);
    
  }

  inTotal(player: any){
    let sum = 0;
    for(let j = 0; j < 9; j++){
      sum += player[j];
    }
    return sum;
  }

  totalScoreIn(){

  }

  saveScoresIn(player: any){
    this.playerInfoService.updatePlayerInfo(player);
  }

 totalOut(player: any){
    let sum = 0;
    for(let i = 0; i < 9; i++){
      sum += player[i];
    }
    return sum;
  }

  totalIn(player: any){
    let sum = 0;
    for(let j = 0; j < 9; j++){
      sum += player[j];
    }
    return sum;
  }

 



}



