import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import { PlayerInfo } from "./player-info";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {
  // private db: AngularFirestore;
  private players: AngularFirestoreCollection<PlayerInfo>;


  constructor(afs: AngularFirestore) {
    this.players = afs.collection<PlayerInfo>('players');
  }

  loadPlayers(): Observable<PlayerInfo[]> {
    return this.players.valueChanges();
      }

    playersEntered(name: string){
      let player = {
        name: name,
        scoresOut: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        scoresIn: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      };
      this.players.doc(player.name).set(player).then(function (){
        
      } );
    }

    removePlayer(player){
      this.players.doc(player.name).delete().then(function (){

      } );

    }

    updatePlayerInfo(player){
      this.players.doc(player.name).set(player);
    }
}
