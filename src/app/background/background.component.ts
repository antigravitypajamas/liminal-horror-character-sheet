import { Component } from '@angular/core';
import { CharacterStore } from '../services/character.store';

@Component({
  selector: 'background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
})
export class BackgroundComponent {
  constructor(private characterStore: CharacterStore) {}

  addBackground(background: string) {
    this.characterStore.saveCharacter({ background });
  }
}
