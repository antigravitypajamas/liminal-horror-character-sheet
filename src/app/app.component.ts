import { Observable, map, of, tap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Character } from './models/character';
import { CharacterStore } from './services/character.store';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  char$: Observable<any> = of({});
  character: Character = {};
  form: FormGroup = new FormGroup({});
  constructor(private characterStore: CharacterStore, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      background: ['', Validators.required],
      baseStrength: ['', Validators.required],
      modifiedStrength: [''],
      baseDexterity: ['', Validators.required],
      modifiedDexterity: [''],
      baseControl: ['', Validators.required],
      modifiedControl: [''],
      baseHp: ['', Validators.required],
      modifiedHp: [''],
      deprived: [''],
      armor: [''],
      stability: [''],
      inventoryRightHand: [''],
      inventoryLeftHand: [''],
      inventorySlot3: [''],
      inventorySlot4: [''],
      inventorySlot5: [''],
      inventorySlot6: [''],
      inventorySlot7: [''],
      inventorySlot8: [''],
      inventorySlot9: [''],
      inventorySlot10: [''],
      fatigue1: [false],
      fatigue2: [false],
      fatigue3: [false],
      fatigue4: [false],
      fatigue5: [false],
      fatigue6: [false],
      fatigue7: [false],
      fatigue8: [false],
      fatigue9: [false],
      fatigue10: [false],
    });
  }

  ngOnInit() {
    this.char$ = this.characterStore.loadCharacter().pipe(
      map((data) => {
        this.character = data;
      })
    );

    this.char$.subscribe();
  }

  ngAfterViewInit(): void {
    this.form = this.fb.group({
      name: [this.character.name, Validators.required],
      background: [this.character.background, Validators.required],
      baseStrength: [this.character.baseStrength, Validators.required],
      modifiedStrength: [this.character.modifiedStrength],
      baseDexterity: [this.character.baseDexterity, Validators.required],
      modifiedDexterity: [this.character.modifiedDexterity],
      baseControl: [this.character.baseControl, Validators.required],
      modifiedControl: [this.character.modifiedControl],
      baseHp: [this.character.baseHp, Validators.required],
      modifiedHp: [this.character.modifiedHp],
      deprived: [this.character.deprived],
      armor: [this.character.armor],
      stability: [this.character.stability],
    });
  }

  saveCharacter() {
    const changes = this.form.value;

    this.char$ = this.characterStore.saveCharacter(changes);
  }
}
