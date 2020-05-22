import { PlayerSpentAmountInRound } from "./Player-Spent-Amount-In-Round.interface";

export interface PlayerSpentAmountInShuffle {
  amount: number;
  shuffleNo: number;
  roundBreakDown: PlayerSpentAmountInRound[];
}
