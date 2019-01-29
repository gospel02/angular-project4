import { Component, OnInit } from '@angular/core';
import { PlayerInfo } from '../player-info';
import { PlayerInfoService } from "../player-info.service";
import { CourseInfoService } from "../course-info.service";

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  players: Array<PlayerInfo>;
  public golfCourses;
  public selectedcourse;

  constructor(
    private playerInfoService: PlayerInfoService,
    private courseInfoService: CourseInfoService
    ) {
  }

  ngOnInit() {
    this.loadPlayers();
  }

  loadCourses(){
    this.courseInfoService.loadCoursesInfo().subscribe(golfCourses => this.golfCourses = golfCourses.courses);
  }

  loadPlayers() {
    this.playerInfoService.loadPlayers().subscribe(players => this.players = players)
  }

  addPlayer(name: string) {
    this.playerInfoService.addPlayer(name);
  }

      
    removePlayer(player) {
    this.playerInfoService.removePlayer(player);
  }
}
