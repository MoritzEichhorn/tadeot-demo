import { MorseCode, Sign } from './morse-code';

describe('MorseCode', () => {
  it('should create an instance', () => {
    expect(new MorseCode([Sign.Pause])).toBeTruthy();
  });

  it ('Long should give  -', () => {
    const code = new MorseCode([Sign.Long]);
    expect(code.toString()).toEqual(' — ');
  });

  it ('Short should give  •', () => {
    expect(new MorseCode([Sign.Short]).toString()).toEqual(' • ');
  });

  it ('Pause  should give  |', () => {
    expect(new MorseCode([Sign.Pause]).toString()).toEqual('  |  ');
  });

  it ('Long should give key 2', () => {
    expect(new MorseCode([Sign.Long]).key).toEqual('2');
  });

  it ('Short should give key 1', () => {
    expect(new MorseCode([Sign.Short]).key).toEqual('1');
  });

  it ('Pause  should give key 0', () => {
    expect(new MorseCode([Sign.Pause]).key).toEqual('0');
  });

  it ('Longer sequence => key 120, string • -  | ', () => {
    expect(new MorseCode([Sign.Short, Sign.Long, Sign.Pause]).key).toEqual('120');
    expect(new MorseCode([Sign.Short, Sign.Long, Sign.Pause]).toString()).toEqual(' •  —   |  ');
  });
});
