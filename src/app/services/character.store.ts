import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterStore {
  private characterSubject = new BehaviorSubject<Character>({});

  character$: Observable<Character> = this.characterSubject.asObservable();

  saveCharacter(changes: Partial<Character>) {
    const character = this.characterSubject.getValue();
    const newCharacter = { ...character, ...changes };

    localStorage.setItem(
      'liminalHorrorCharacter',
      JSON.stringify(newCharacter)
    );

    this.characterSubject.next(newCharacter);
    return this.characterSubject.asObservable();
  }

  loadCharacter() {
    const whatIsStored = localStorage.getItem('liminalHorrorCharacter');

    if (whatIsStored) {
      this.character$ = of(
        JSON.parse(localStorage.getItem('liminalHorrorCharacter') || '')
      );
    }
    return this.character$;
  }
}
