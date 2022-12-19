import { CharacterStore } from './services/character.store';
import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  character: string;
  constructor(private characterStore: CharacterStore) {
    this.character = this.characterStore.loadCharacter();
  }

  saveCharacter() {}
  title = 'liminal-horror-character-sheet';
}
