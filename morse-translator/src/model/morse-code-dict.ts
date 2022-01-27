import {MorseCode, Sign} from './morse-code';
import {isPackageNameSafeForAnalytics} from '@angular/cli/models/analytics';

export class MorseCodeDict {

  // mapping of an alphanumeric symbol to it's morse code
  private alphaToMorse = new Map<string, MorseCode>([
    ['A', new MorseCode([Sign.Short, Sign.Long])],
    ['B', new MorseCode([Sign.Long, Sign.Short, Sign.Short, Sign.Short])],
    ['C', new MorseCode([Sign.Long, Sign.Short, Sign.Long, Sign.Short])],
    ['D', new MorseCode([Sign.Long, Sign.Short, Sign.Short])],
    ['E', new MorseCode([Sign.Short])],
    ['F', new MorseCode([Sign.Short, Sign.Short, Sign.Long, Sign.Short])],
    ['G', new MorseCode([Sign.Long, Sign.Long, Sign.Short])],
    ['H', new MorseCode([Sign.Short, Sign.Short, Sign.Short, Sign.Short])],
    ['I', new MorseCode([Sign.Short, Sign.Short])],
    ['J', new MorseCode([Sign.Short, Sign.Long, Sign.Long, Sign.Long])],
    ['K', new MorseCode([Sign.Long, Sign.Short, Sign.Long])],
    ['L', new MorseCode([Sign.Short, Sign.Long, Sign.Short, Sign.Short])],
    ['M', new MorseCode([Sign.Long, Sign.Long])],
    ['N', new MorseCode([Sign.Long, Sign.Short])],
    ['O', new MorseCode([Sign.Long, Sign.Long, Sign.Long])],
    ['P', new MorseCode([Sign.Short, Sign.Long, Sign.Long, Sign.Short])],
    ['Q', new MorseCode([Sign.Long, Sign.Long, Sign.Short, Sign.Long])],
    ['R', new MorseCode([Sign.Short, Sign.Long, Sign.Short])],
    ['S', new MorseCode([Sign.Short, Sign.Short, Sign.Short])],
    ['T', new MorseCode([Sign.Long])],
    ['U', new MorseCode([Sign.Short, Sign.Short, Sign.Long])],
    ['V', new MorseCode([Sign.Short, Sign.Short, Sign.Short, Sign.Long])],
    ['W', new MorseCode([Sign.Short, Sign.Long, Sign.Long])],
    ['X', new MorseCode([Sign.Long, Sign.Short, Sign.Short, Sign.Long])],
    ['Y', new MorseCode([Sign.Long, Sign.Short, Sign.Long, Sign.Long])],
    ['Z', new MorseCode([Sign.Long, Sign.Long, Sign.Short, Sign.Short])],
    ['0', new MorseCode([Sign.Long, Sign.Long, Sign.Long, Sign.Long, Sign.Long])],
    ['1', new MorseCode([Sign.Short, Sign.Long, Sign.Long, Sign.Long, Sign.Long])],
    ['2', new MorseCode([Sign.Short, Sign.Short, Sign.Long, Sign.Long, Sign.Long])],
    ['3', new MorseCode([Sign.Short, Sign.Short, Sign.Short, Sign.Long, Sign.Long])],
    ['4', new MorseCode([Sign.Short, Sign.Short, Sign.Short, Sign.Short, Sign.Long])],
    ['5', new MorseCode([Sign.Short, Sign.Short, Sign.Short, Sign.Short, Sign.Short])],
    ['6', new MorseCode([Sign.Long, Sign.Short, Sign.Short, Sign.Short, Sign.Short])],
    ['7', new MorseCode([Sign.Long, Sign.Long, Sign.Short, Sign.Short, Sign.Short])],
    ['8', new MorseCode([Sign.Long, Sign.Long, Sign.Long, Sign.Short, Sign.Short])],
    ['9', new MorseCode([Sign.Long, Sign.Long, Sign.Long, Sign.Long, Sign.Short])],
    [' ', new MorseCode([Sign.Pause])]
  ]);

  // mapping of a numeric morse code key to its alphanumeric representation
  private morseToAlpha: Map<string, string>;

  constructor() {
    this.morseToAlpha = new Map<string, string>();
    this.alphaToMorse.forEach((value: MorseCode, key: string) => {
      this.morseToAlpha.set(value.key, key);
    });
  }

  public convertAlphaToMorse(alpha: string): string {
    let text = '';
    let found = false;
    for (const letter of alpha.toUpperCase()) {
      for (const entry of this.alphaToMorse.entries()) {
        if (entry[0] === letter) {
          found = true;
          text += entry[1].toString();
          break;
        }
      }
      if (!found) {
        text = 'ERROR';
        break;
      }
    }
    return text;
  }

  convertMorseToAlpha(morse: MorseCode[]): string {
    let text = '';
    for (const letter of morse) {
      for (const entry of this.morseToAlpha.entries()) {
        if (entry[0] === letter.key) {
          text += entry[1].toString();
          break;
        }
      }
    }
    return text;
  }
}
