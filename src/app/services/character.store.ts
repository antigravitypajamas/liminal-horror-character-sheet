import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterStore {
  character: string = '';
  //private characterSubject = new BehaviorSubject<Character>({});

  //character$: Observable<Character> = this.characterSubject.asObservable();

  saveCharacter(changes: Partial<Character>) {
    localStorage.setItem('liminalHorrorCharacter', JSON.stringify(changes));
  }

  loadCharacter() {
    this.character = localStorage.getItem('liminalHorrorCharacter') || '';
    return this.character;
  }
}
