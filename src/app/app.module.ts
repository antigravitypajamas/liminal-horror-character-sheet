import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterNameComponent } from './character-name/character-name.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelAndInputComponent } from './label-and-input/label-and-input.component';
import { BackgroundComponent } from './background/background.component';
import { CharacterStatComponent } from './character-stat/character-stat.component';

@NgModule({
  declarations: [AppComponent, CharacterNameComponent, LabelAndInputComponent, BackgroundComponent, CharacterStatComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
