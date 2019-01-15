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
    private playerService: PlayerInfoService,
    ) {
  }

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    this.playerService.loadPlayers().subscribe(players => this.players = players)
  }

  addPlayer(name: string) {
    let sameName: boolean;
    if (!sameName){
      this.playerService.addPlayer(name);
    }else{
      alert('Duplicate Name');
    }


  }

  deletePlayer(player) {
    this.playerService.deletePlayer(player);
  }
}
