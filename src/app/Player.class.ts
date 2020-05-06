export class Player {
  private name: string = "";
  private cashBalance: number = 0;
  private role: string = "";
  private isHost: boolean = false;
  private bgColor: string = "";

  constructor(_name: string, _cb: number, _co: string) {
    this.name = _name;
    this.cashBalance = _cb;
    this.bgColor = _co;
  }

  setRole(_ro: string) {
    this.role = _ro;
  }

  setIsHost(_isH: boolean) {
    this.isHost = _isH;
  }
}
