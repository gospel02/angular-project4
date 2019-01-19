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


  constructor(db: AngularFirestore) {
    this.players = db.collection<PlayerInfo>('players');
  }

  loadPlayers(): Observable<PlayerInfo[]> {
    return this.players.valueChanges();
      }

    addPlayer(name: string){
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

    updatePlayer(player){
      this.players.doc(player.name).set(player);
    }
}
