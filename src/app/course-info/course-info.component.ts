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
  public course;
  players: Array<PlayerInfo>;
  public tee;

  constructor(
    private playerInfoService: PlayerInfoService,
    private courseInfoService: CourseInfoService
  ) {
  }

  ngOnInit() {
    this.loadPlayers();
    this.loadCourseTees();
  }

  changeTee(chosenTee){
    this.tee = chosenTee;
    console.log("Changed to tee #" + chosenTee);
  }

  loadPlayers() {
    this.playerInfoService.loadPlayers().subscribe(players => this.players = players);
  }

  loadCourseTees() {
    this.courseInfoService.loadCourseInfo().subscribe(data => {
      console.log(data);
      this.course = data['data'];
      this.tee = 0;
    });
  }

  saveScores(player){
    this.playerInfoService.updatePlayer(player);
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

}
