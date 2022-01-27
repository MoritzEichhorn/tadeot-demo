import { MorseCode, Sign } from './morse-code';
import { MorseCodeDict } from './morse-code-dict';

describe('MorseCodeDict', () => {
  it('should create an instance', () => {
    expect(new MorseCodeDict()).toBeTruthy();
  });

  it('should convert alpha to morse', () => {
    const dict = new MorseCodeDict();
    expect(dict.convertAlphaToMorse('A')).toEqual(' •  — ');
    expect(dict.convertAlphaToMorse('AA')).toEqual(' •  —  •  — ');
    expect(dict.convertAlphaToMorse('A A')).toEqual(' •  —   |   •  — ');
    expect(dict.convertAlphaToMorse('?')).toEqual('ERROR');
    // expect( () => dict.convertAlphaToMorse('?')).toThrowError();
    expect(dict.convertAlphaToMorse('')).toEqual('');
  });

  it('should convert morse to alpha', () => {
    const dict = new MorseCodeDict();
    let code = [new MorseCode([Sign.Short, Sign.Long])];
    expect(dict.convertMorseToAlpha(code)).toEqual('A');
    code = [new MorseCode([Sign.Pause])];
    expect(dict.convertMorseToAlpha(code)).toEqual(' ');
    code = [new MorseCode([Sign.Long, Sign.Long, Sign.Long, Sign.Long, Sign.Long])];
    expect(dict.convertMorseToAlpha(code)).toEqual('0');
    code = [new MorseCode([Sign.Short, Sign.Short, Sign.Short, Sign.Short, Sign.Short])];
    expect(dict.convertMorseToAlpha(code)).toEqual('5');

    // unknown code
    code = [new MorseCode([Sign.Short, Sign.Short, Sign.Short, Sign.Short, Sign.Short, Sign.Short, Sign.Short])];
    expect(dict.convertMorseToAlpha(code)).toEqual('');
  });

});
