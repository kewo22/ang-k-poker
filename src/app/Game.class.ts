import { Player } from "./Player.class";

export class Game {
  private activePlayers: Player[];
  private allPlayers: Player[];
  private currentRound: string;
  private isRoundStarted: boolean = false;
  private blindAmount: BlindAmount = {
    smallBlind: 5,
    bigBlind: 10
  };
  private blindPlayers: BlindPlayer = {
    smallBlind: null,
    bigBlind: null
  };
  private currentPlayer: Player = null;
  private previousPlayer: Player = null;
  private nextPlayer: Player = null;

  private roundBetAmount: number;
  private totalPotAmount: number = 0;

  private minBetAmount: number = 0;

  constructor(allPlayers: Player[]) {
    this.activePlayers = allPlayers;
  }

  public setRoundStarted(_isRoundStarted: boolean): void {
    this.isRoundStarted = _isRoundStarted;
  }

  public getRoundStarted(): boolean {
    return this.isRoundStarted;
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

  public getTotalPotAmount(): number {
    return this.totalPotAmount;
  }

  public setTotalPotAmount(_tpa: number): void {
    this.totalPotAmount += _tpa;
  }

  public resetPotAmount(): void {
    this.totalPotAmount = 0;
  }

  public setCurrentRound(_cr: string): void {
    this.currentRound = _cr;
  }

  public getCurrentRound(): string {
    return this.currentRound;
  }

  public setMinBetAmount(_mba: number): void {
    this.minBetAmount = _mba;
  }

  public getMinBetAmountRound(): number {
    return this.minBetAmount;
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
