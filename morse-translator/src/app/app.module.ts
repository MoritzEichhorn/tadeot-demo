import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MorseLogHistoryComponent } from './morse-log-history/morse-log-history.component';
import { MorseCodeTranslatorComponent } from './morse-code-translator/morse-code-translator.component';
import { AlphaTranslatorComponent } from './alpha-translator/alpha-translator.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MorseLogHistoryComponent,
    MorseCodeTranslatorComponent,
    AlphaTranslatorComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
