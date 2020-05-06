import { Player } from "./Player.class";

export class Game {
  private activePlayers: Player[];
  private allPlayers: Player[];
  private currentRound: string;
  private isRoundStarted: boolean;
  private blindAmount: BlindAmount = {
    smallBlind: 5,
    bigBlind: 10
  };
  private blindPlayers: BlindPlayer = {
    smallBlind: null,
    bigBlind: null
  };
  private currentPlayer: Player;
  private previousPlayer: Player;
  private nextPlayer: Player;

  private roundBetAmount: number;
  private totalPotAmount: number = 0;

  constructor(allPlayers: Player[]) {
    this.activePlayers = allPlayers;
  }

  public setRoundStarted(_isRoundStarted: boolean): void {
    this.isRoundStarted = _isRoundStarted;
  }

  public getBlindAmount(): BlindAmount {
    return this.blindAmount;
  }

  public getCurrentPlayer(): Player {
    return this.currentPlayer;
  }

  public setCurrentPlayer(_cp: Player): void {
    this.currentPlayer = _cp;
  }

  public getPreviousPlayer(): Player {
    return this.previousPlayer;
  }

  public setPreviousPlayer(_pp: Player): void {
    this.previousPlayer = _pp;
  }

  public getNextPlayer(): Player {
    return this.nextPlayer;
  }

  public setNextPlayer(_np: Player): void {
    this.nextPlayer = _np;
  }

  public setSmallBlindPlayer(_sbp: Player): void {
    this.blindPlayers.smallBlind = _sbp;
  }

  public getSmallBlindPlayer(): Player {
    return this.blindPlayers.smallBlind;
  }

  public setBigBlindPlayer(_bbp): void {
    this.blindPlayers.bigBlind = _bbp;
  }

  public getBigBlindPlayer(): Player {
    return this.blindPlayers.bigBlind;
  }

  public getNexrPlayer(_p: Player): Player {
    const i = this.activePlayers.findIndex(player => {
      return player.id === _p.id;
    });

    if (this.activePlayers[i + 1]) {
      return this.activePlayers[i + 1];
    } else {
      return this.activePlayers[0];
    }
  }

  getTotalPotAmount(): number {
    return this.totalPotAmount;
  }

  setTotalPotAmount(_tpa): void {
    this.totalPotAmount += _tpa;
  }
}

interface BlindAmount {
  smallBlind: number;
  bigBlind: number;
}

interface BlindPlayer {
  smallBlind: Player;
  bigBlind: Player;
}
