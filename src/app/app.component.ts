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
      inventoryRightHand: [this.character.inventoryRightHand],
      inventoryLeftHand: [this.character.inventoryLeftHand],
      inventorySlot3: [this.character.inventorySlot3],
      inventorySlot4: [this.character.inventorySlot4],
      inventorySlot5: [this.character.inventorySlot5],
      inventorySlot6: [this.character.inventorySlot6],
      inventorySlot7: [this.character.inventorySlot7],
      inventorySlot8: [this.character.inventorySlot8],
      inventorySlot9: [this.character.inventorySlot9],
      inventorySlot10: [this.character.inventorySlot10],
      fatigue1: [this.character.fatigue1],
      fatigue2: [this.character.fatigue2],
      fatigue3: [this.character.fatigue3],
      fatigue4: [this.character.fatigue4],
      fatigue5: [this.character.fatigue5],
      fatigue6: [this.character.fatigue6],
      fatigue7: [this.character.fatigue7],
      fatigue8: [this.character.fatigue8],
      fatigue9: [this.character.fatigue9],
      fatigue10: [this.character.fatigue10],
    });
  }

  saveCharacter() {
    const changes = this.form.value;

    this.char$ = this.characterStore.saveCharacter(changes);
  }
}
