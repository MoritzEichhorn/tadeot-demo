export enum State {
  sent,
  received
}


export class MorseLogEntry {
  constructor(
    public time: Date,
    public alpha: string,
    public morseCode: string,
    public state: State) {
  }
}
