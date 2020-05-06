import { Player } from "./Player.class";

export class Game {
  private activePlayers: Player[];
  private allPlayers: Player[];
  private currentRound: string;
  private isRoundStarted: boolean;
  private blindAmount: Blind = {
    smallBlind: 5,
    bigBlind: 10
  };
  private focusedPlayer: Player;

  constructor(allPlayers: Player[]) {
    this.activePlayers = allPlayers;
  }

  public setRoundStarted(_isRoundStarted: boolean): void {
    this.isRoundStarted = _isRoundStarted;
  }

  public getBlindAmount(): Blind {
    return this.blindAmount;
  }
}

interface Blind {
  smallBlind: number;
  bigBlind: number;
}
