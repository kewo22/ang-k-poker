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

  isCheckDisabled: boolean = false;

  ngOnInit() {
    const p1 = new Player("JAN", 1000, UserColorShaeds.Colour1);
    const p2 = new Player("FEB", 1000, UserColorShaeds.Colour2);
    const p3 = new Player("MAR", 1000, UserColorShaeds.Colour3);
    const p4 = new Player("APR", 1000, UserColorShaeds.Colour4);
    const p5 = new Player("MAY", 1000, UserColorShaeds.Colour5);
    this.players.push(p1, p2, p3, p4, p5);

    console.log(this.players);

    this.initHost();

    const g = new Game(this.players);
    this.game = g;

    this.game.setCurrentRound(Round.Flop);

    this.initRole();
    console.log(this.players);
    console.log(this.game);
  }

  initRole(): void {
    this.players[0].setRole(Role.Delear);
    this.players[1].setRole(Role.SmallBlind);
    this.players[2].setRole(Role.BigBlind);
    this.players[3].setRole(Role.Player);
    this.players[4].setRole(Role.Player);

    this.game.setSmallBlindPlayer(this.players[1]);
    this.game.setBigBlindPlayer(this.players[2]);

    this.game.setCurrentPlayer(this.players[1]);
    this.game.setNextPlayer(this.players[2]);
  }

  initHost(): void {
    this.players[0].setIsHost(true);
  }

  onStartRoundClick(): void {
    this.game.setRoundStarted(true);

    this.game.setPreviousPlayer(this.game.getBigBlindPlayer());
    this.game.setCurrentPlayer(
      this.game.getNexrPlayer(this.game.getBigBlindPlayer())
    );
    this.game.setNextPlayer(
      this.game.getNexrPlayer(this.game.getCurrentPlayer())
    );

    this.isCheckDisabled = true;

    console.clear();
    console.log(this.game);
    console.log(this.players);

    this.game
      .getSmallBlindPlayer()
      .setCashBalance(
        this.game.getSmallBlindPlayer().getCashBalance() -
          this.game.getBlindAmount().smallBlind
      );

    this.game.setTotalPotAmount(this.game.getBlindAmount().smallBlind);

    this.game.setTotalPotAmount(this.game.getBlindAmount().bigBlind);
    this.game
      .getBigBlindPlayer()
      .setCashBalance(
        this.game.getBigBlindPlayer().getCashBalance() -
          this.game.getBlindAmount().bigBlind
      );
  }

  onEndRoundClick(): void {
    // Should run automatically, after all raise done.
    this.updateCurrentRound();
    this.game.setRoundStarted(false);
  }

  onCheckClick(_p: Player): void {
    this.updateNextCurrentPreviousPlayer();

    console.clear();
    console.log(this.game);
    console.log(this.players);
  }

  updateNextCurrentPreviousPlayer(): void {
    this.game.setPreviousPlayer(this.game.getCurrentPlayer());
    this.game.setCurrentPlayer(this.game.getNextPlayer());
    this.game.setNextPlayer(
      this.game.getNexrPlayer(this.game.getCurrentPlayer())
    );
  }

  updateCurrentRound(): void {
    if (this.game.getCurrentRound() === Round.Flop) {
      this.game.setCurrentRound(Round.Turn);
      return;
    }
    if (this.game.getCurrentRound() === Round.Turn) {
      this.game.setCurrentRound(Round.River);
      return;
    }
    if (this.game.getCurrentRound() === Round.River) {
      this.game.setCurrentRound(Round.Flop);
      return;
    }
  }

  onRaiseClick(amountInput: HTMLInputElement): void {
    console.log(amountInput.value);
    this.game.setTotalPotAmount(+amountInput.value);
    this.updateNextCurrentPreviousPlayer();
  }
}

enum Role {
  Delear = "Delear",
  SmallBlind = "SmallBlind",
  BigBlind = "BigBlind",
  Player = "Player"
}

enum Round {
  Flop = "Flop",
  Turn = "Turn",
  River = "River"
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
