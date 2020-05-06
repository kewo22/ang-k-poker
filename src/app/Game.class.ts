import { Player } from "./Player.class";

export class Game {
  activePlayers: Player[];
  allPlayers: Player[];
  currentRound: string;
  isRoundStarted: boolean;

  constructor(allPlayers: Player[]) {
    this.activePlayers = allPlayers;
  }

  setRoundStarted(_isRoundStarted: boolean): void {
    this.isRoundStarted = _isRoundStarted;
  }
}
