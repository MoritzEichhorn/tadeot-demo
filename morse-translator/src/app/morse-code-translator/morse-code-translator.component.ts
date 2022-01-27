import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MorseCodeDict} from '../../model/morse-code-dict';
import {MorseLogEntry, State} from '../../model/morse-log-entry';

@Component({
  selector: 'app-morse-code-translator',
  templateUrl: './morse-code-translator.component.html',
  styleUrls: ['./morse-code-translator.component.scss']
})
export class MorseCodeTranslatorComponent implements OnInit {
  morse = '';
  alpha = '';
  morseCodeDict: MorseCodeDict;
  @Output() logEntryCreated: EventEmitter<MorseLogEntry> = new EventEmitter<MorseLogEntry>();

  constructor() {
    this.morseCodeDict = new MorseCodeDict();
  }

  ngOnInit(): void {
  }

  generateMorse(): void {
    this.morse = this.morseCodeDict.convertAlphaToMorse(this.alpha);
  }

  reset(): void {
    this.alpha = '';
    this.morse = '';
  }

  clickButton(): void {
    this.logEntryCreated.emit( new MorseLogEntry(new Date(), this.alpha, this.morse, State.sent));
    this.reset();
  }
}
