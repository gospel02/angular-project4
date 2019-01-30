import { Component, OnInit } from '@angular/core';
import { PlayerInfo } from '../player-info';
import { PlayerInfoService } from "../player-info.service";
import { CourseInfoService } from "../course-info.service";
import { Observable } from 'rxjs';
import { CourseInfo } from '../course-info';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  players: Array<PlayerInfo>;
  public golfCourses;
  public selectedcourse;
  courseObservable: Observable<CourseInfo[]>;

  constructor(
    private playerInfoService: PlayerInfoService,
    private courseInfoService: CourseInfoService
    ) {this.courseObservable = this.courseInfoService.loadCoursesInfo();
  }

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    this.playerInfoService.loadPlayers().subscribe(players => this.players = players)
  }

  playersEntered(name: string) {
    this.playerInfoService.playersEntered(name);
  }

      
    removePlayer(player) {
    this.playerInfoService.removePlayer(player);
  }
}
