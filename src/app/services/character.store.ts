import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterStore {
  //character: Character = {};
  private characterSubject = new BehaviorSubject<Character>({});

  character$: Observable<Character> = this.characterSubject.asObservable();

  saveCharacter(changes: Partial<Character>) {
    const character = this.characterSubject.getValue();
    const newCharacter = { ...character, ...changes };

    // send to local storage as a test
    localStorage.setItem(
      'liminalHorrorCharacter',
      JSON.stringify(newCharacter)
    );

    this.characterSubject.next(newCharacter);
    return this.characterSubject.asObservable();
    // this.character = { ...this.character, ...changes };
    // localStorage.setItem(
    //   'liminalHorrorCharacter',
    //   JSON.stringify(this.character)
    // );
  }

  loadCharacter() {
    // console.log(
    //   JSON.parse(localStorage.getItem('liminalHorrorCharacter') || '')
    // );
    this.character$ = of(
      JSON.parse(localStorage.getItem('liminalHorrorCharacter') || '')
    );
    //this.character$.pipe(map((data) => console.log(data)));
    return this.character$;
  }
}
