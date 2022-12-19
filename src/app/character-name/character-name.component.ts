import { CharacterStore } from './../services/character.store';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'character-name',
  templateUrl: './character-name.component.html',
  styleUrls: ['./character-name.component.css'],
})
export class CharacterNameComponent {
  name: string = '';

  @Output()
  nameEvent = new EventEmitter<string>();
  constructor(private store: CharacterStore) {}

  addName(name: string) {
    this.store.saveCharacter({ name });
  }
}
