export class Player {
  private name: string;
  private cashBalance: number;
  private role: string;

  constructor(_name: string, _cb: number) {
    this.name = _name;
    this.cashBalance = _cb;
  }

  setRole(_ro: string) {
    this.role = _ro;
  }
}
