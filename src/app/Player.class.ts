export class Player {
  private id: string = "";
  private name: string = "";
  private cashBalance: number = 0;
  private role: string = "";
  private isHost: boolean = false;
  private bgColor: string = "";

  private playerCallAmount: number = 0;
  private playerSpentAmount: number = 0;

  private isCallBtnDisabled: boolean = false;
  private isCheckBtnDisabled: boolean = false;
  private isRaiseBtnDisabled: boolean = false;
  private isFoldBtnDisabled: boolean = false;
  private isRaiseInputDisabled: boolean = false;

  constructor(_name: string, _cb: number, _co: string) {
    this.id = _name + (Math.random() * 10000).toFixed().toString();
    this.name = _name;
    this.cashBalance = _cb;
    this.bgColor = _co;
  }

  public setRole = (_ro: string): void => {
    this.role = _ro;
  };

  public getRole = (): string => {
    return this.role;
  };

  public setCashBalance = (_cb: number, _op: string): void => {
    if (_op === "+") {
      this.cashBalance += _cb;
    }
    if (_op === "-") {
      this.cashBalance -= _cb;
      this.playerSpentAmount += _cb;
    }
  };

  public getCashBalance(): number {
    return this.cashBalance;
  }

  public setIsHost = (_isH: boolean): void => {
    this.isHost = _isH;
  };

  public setPlayerCallAmount = (_minBetAmount: number): void => {
    this.playerCallAmount = _minBetAmount - this.playerSpentAmount;
  };

  public getPlayerCallAmount = (): number => {
    return this.playerCallAmount;
  };

  public setIsCheckBtnDisabled = (_icd: boolean): void => {
    this.isCheckBtnDisabled = _icd;
  };

  public getIsCheckBtnDisabled = (): boolean => {
    return this.isCheckBtnDisabled;
  };

  public setIsCallBtnDisabled = (_icd: boolean): void => {
    this.isCallBtnDisabled = _icd;
  };

  public getIsCallBtnDisabled = (): boolean => {
    return this.isCallBtnDisabled;
  };

  public setIsRaiseBtnDisabled = (_ird: boolean): void => {
    this.isRaiseBtnDisabled = _ird;
  };

  public getIsRaiseBtnDisabled = (): boolean => {
    return this.isRaiseBtnDisabled;
  };

  public setIsRaiseInputDisabled = (_ird: boolean): void => {
    this.isRaiseInputDisabled = _ird;
  };

  public getIsRaiseInputDisabled = (): boolean => {
    return this.isRaiseInputDisabled;
  };
}
