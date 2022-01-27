import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MorseCodeDict} from '../../model/morse-code-dict';
import {MorseLogEntry, State} from '../../model/morse-log-entry';
import {MorseCode, Sign} from '../../model/morse-code';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material/tooltip';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};

@Component({
  selector: 'app-alpha-translator',
  templateUrl: './alpha-translator.component.html',
  styleUrls: ['./alpha-translator.component.scss'],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ]
})
export class AlphaTranslatorComponent implements OnInit {
  morse = '';
  alpha = '';
  pause = false;
  undoAvailable = false;
  morseCodeDict: MorseCodeDict;
  signs = new Array<MorseCode>();
  @Output() logEntryCreated: EventEmitter<MorseLogEntry> = new EventEmitter<MorseLogEntry>();
  newLine = false;

  constructor() {
    this.morseCodeDict = new MorseCodeDict();
  }

  ngOnInit(): void {
  }

  reset(): void {
    this.alpha = '';
    this.morse = '';
    this.signs = new Array<MorseCode>();
    this.undoAvailable = false;
  }

  clickButton(): void {
    this.logEntryCreated.emit(new MorseLogEntry(new Date(), this.alpha, this.morse, State.received));
    this.reset();
  }

  addSymbol(s: string): void {
    if (this.signs.length === 0) {
      this.newLine = true;
    }

    switch (s) {
      case '|':
        this.signs.push(new MorseCode([Sign.Pause]));
        this.newLine = true;
        this.morse += ' ' + s + '\n';
        break;
      case '•':
        this.newLine ? this.signs.push(new MorseCode([Sign.Short])) : this.signs[this.signs.length - 1].signs.push(Sign.Short);
        this.newLine = false;
        this.morse += ' ' + s + '';
        break;
      case '—':
        this.newLine ? this.signs.push(new MorseCode([Sign.Long])) : this.signs[this.signs.length - 1].signs.push(Sign.Long);
        this.newLine = false;
        this.morse += ' ' + s + '';
        break;
      case '':
        this.newLine = true;
        this.morse += '\n';
        break;
    }

    this.undoAvailable = this.signs.length > 0 && this.signs[this.signs.length - 1].signs.length > 0 && !this.newLine;

    this.alpha = this.morseCodeDict.convertMorseToAlpha(this.signs);
    this.generateMorseText();
  }

  generateMorseText(): void {
    this.morse = '';
    this.signs.forEach(morseCode => {
      this.morse += morseCode.toString();
      this.morse += '\n';
    });
  }

  undo(): void {
    this.signs[this.signs.length - 1].signs.pop();
    this.alpha = this.morseCodeDict.convertMorseToAlpha(this.signs);
    this.generateMorseText();
    this.undoAvailable = this.signs.length > 0 && this.signs[this.signs.length - 1].signs.length > 0;
  }

  removeLastLine(): void {
    this.signs.pop();
    this.alpha = this.morseCodeDict.convertMorseToAlpha(this.signs);
    this.generateMorseText();
    this.undoAvailable = this.signs.length > 0 && this.signs[this.signs.length - 1].signs.length > 0 && !this.newLine;
  }
}
