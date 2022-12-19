import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterStore {
  character: Character = {};
  //private characterSubject = new BehaviorSubject<Character>({});

  //character$: Observable<Character> = this.characterSubject.asObservable();

  saveCharacter(changes: Partial<Character>) {
    this.character = { ...this.character, ...changes };
    localStorage.setItem(
      'liminalHorrorCharacter',
      JSON.stringify(this.character)
    );
  }

  loadCharacter() {
    this.character = JSON.parse(
      localStorage.getItem('liminalHorrorCharacter') || ''
    );
    return this.character;
  }
}
