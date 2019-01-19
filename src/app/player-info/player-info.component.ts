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

  constructor(
    private playerInfoService: PlayerInfoService,
    ) {
  }

  ngOnInit() {
    this.loadPlayers();
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
