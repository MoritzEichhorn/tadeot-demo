export enum Sign {
  Pause = 0,
  Short = 1,
  Long = 2
}

export class MorseCode {

  private morseSymbols = [
    [Sign.Pause, ' | '],
    [Sign.Short, '•'],
    [Sign.Long, '—']
  ];

  constructor(public signs: Sign[]) {
    if (signs.length === 0) {
      throw new Error('Invalid number of signs');
    }
  }

  get key(): string {
    let sum = '';
    this.signs.forEach(sign => sum += sign);
    return sum;
  }

  public toString(): string {
    let text = '';
    this.signs.forEach(sign => {
        if (sign === Sign.Pause) {
          text += this.morseSymbols.find(morseSymbol => morseSymbol[0] === sign)![1];
        } else {
          text += ' ' + this.morseSymbols.find(morseSymbol => morseSymbol[0] === sign)![1] + ' ';
        }
      }
    );
    return text;
  }

}

