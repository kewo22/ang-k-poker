import { Component, OnInit } from "@angular/core";
import { Player } from "./Player.class";
import { Game } from "./Game.class";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  players: Player[] = [];
  game: Game;

  ngOnInit() {
    const p1 = new Player("JAN", 1000, UserColorShaeds.Colour1);
    const p2 = new Player("FEB", 1000, UserColorShaeds.Colour2);
    const p3 = new Player("MAR", 1000, UserColorShaeds.Colour3);
    this.players.push(p1, p2, p3);

    console.log(this.players);

    this.initRole();
    this.initHost();

    const g = new Game(this.players);
    this.game = g;

    console.log(this.players);
  }

  initRole(): void {
    this.players[0].setRole(Role.Delear);
    this.players[1].setRole(Role.SmallBline);
    this.players[2].setRole(Role.BigBlind);
  }

  initHost(): void {
    this.players[0].setIsHost(true);
  }

  onStartRoundClick(): void {
    this.game.setRoundStarted(true);

    const smallBlindPlayer = this.players.find(player => {
      return player.getRole() === Role.SmallBline;
    });

    smallBlindPlayer.setCashBalance(smallBlindPlayer.getCashBalance() - this.game.getBlindAmount().smallBlind);

    const bigBlindPlayer = this.players.find(player => {
      return player.getRole() === Role.BigBlind;
    });

    bigBlindPlayer.setCashBalance(bigBlindPlayer.getCashBalance() - this.game.getBlindAmount().bigBlind);


  }
}

enum Role {
  Delear = "D",
  SmallBline = "SB",
  BigBlind = "BB"
}

enum UserColorShaeds {
  Colour1 = "#b3a4db",
  Colour2 = "#d1e5cc",
  Colour3 = "#f3bfd2",
  Colour4 = "#f4bee2",
  Colour5 = "#a3c4dc",
  Colour6 = "#f8c9b9",
  Colour7 = "#b3fef1",
  Colour8 = "#def9b8"
}
