import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterNameComponent } from './character-name/character-name.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelAndInputComponent } from './label-and-input/label-and-input.component';
import { BackgroundComponent } from './background/background.component';
import { CharacterStatComponent } from './character-stat/character-stat.component';
import { InventorySlotComponent } from './inventory-slot/inventory-slot.component';
import { MarkdownEditorContainerComponent } from './markdown-editor-container/markdown-editor-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterNameComponent,
    LabelAndInputComponent,
    BackgroundComponent,
    CharacterStatComponent,
    InventorySlotComponent,
    MarkdownEditorContainerComponent,
  ],
  imports: [
    AngularMarkdownEditorModule.forRoot({ iconlibrary: 'fa' }),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
