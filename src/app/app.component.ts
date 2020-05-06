import { Component, OnInit } from "@angular/core";
import { Player } from "./Player.class";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  players: Player[] = [];

  ngOnInit() {
    const p1 = new Player("JAN", 1000);
    const p2 = new Player("FEB", 1000);
    const p3 = new Player("MAR", 1000);
    this.players.push(p1, p2, p3);
    console.log(this.players);
    this.initRole();
  }

  initRole(): void {
    this.players[0].setRole(Role.Delear);
    this.players[1].setRole(Role.SmallBline);
    this.players[2].setRole(Role.BigBlind);
    console.log(this.players);
  }
}

enum Role {
  Delear = "D",
  SmallBline = "SB",
  BigBlind = "BB"
}
