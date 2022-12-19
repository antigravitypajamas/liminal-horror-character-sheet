import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  // saveCharacter(name: string, changes: Partial<Character>): Observable<any> {
  //   return this.http.put(`/api/courses/${name}`, changes).pipe(shareReplay());
  // }

  saveCharacter(name: string, changes: Partial<Character>) {
    localStorage.setItem(name, JSON.stringify(changes));
  }
}
