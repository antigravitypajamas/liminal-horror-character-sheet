import { LessThanZeroValidator } from './services/less-than-zero.validator';
import { Observable, map, of, tap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Character } from './models/character';
import { CharacterStore } from './services/character.store';
import { AfterContentInit, Component, OnInit, Inject } from '@angular/core';
import { EditorOption } from 'angular-markdown-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterContentInit {
  char$: Observable<any> = of({});
  character: Character = {};
  form: FormGroup = new FormGroup({});
  markdownText: string = '';
  editorOptions: EditorOption = {};
  constructor(
    private characterStore: CharacterStore,
    private fb: FormBuilder,
    private lessThanZeroValidator: LessThanZeroValidator
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      background: ['', Validators.required],
      baseStrength: [
        0,
        {
          validators: [Validators.required],
          asyncValidators: [
            this.lessThanZeroValidator.validate.bind(
              this.lessThanZeroValidator
            ),
          ],
          updateOn: 'blur',
        },
      ],
      modifiedStrength: [
        0,
        {
          asyncValidators: [
            this.lessThanZeroValidator.validate.bind(
              this.lessThanZeroValidator
            ),
          ],
          updateOn: 'blur',
        },
      ],
      baseDexterity: [
        0,
        {
          validators: [Validators.required],
          asyncValidators: [
            this.lessThanZeroValidator.validate.bind(
              this.lessThanZeroValidator
            ),
          ],
          updateOn: 'blur',
        },
      ],
      modifiedDexterity: [
        0,
        {
          asyncValidators: [
            this.lessThanZeroValidator.validate.bind(
              this.lessThanZeroValidator
            ),
          ],
          updateOn: 'blur',
        },
      ],
      baseControl: [
        0,
        {
          validators: [Validators.required],
          asyncValidators: [
            this.lessThanZeroValidator.validate.bind(
              this.lessThanZeroValidator
            ),
          ],
          updateOn: 'blur',
        },
      ],
      modifiedControl: [
        0,
        {
          asyncValidators: [
            this.lessThanZeroValidator.validate.bind(
              this.lessThanZeroValidator
            ),
          ],
          updateOn: 'blur',
        },
      ],
      baseHp: [
        0,
        {
          validators: [Validators.required],
          asyncValidators: [
            this.lessThanZeroValidator.validate.bind(
              this.lessThanZeroValidator
            ),
          ],
          updateOn: 'blur',
        },
      ],
      modifiedHp: [
        0,
        {
          asyncValidators: [
            this.lessThanZeroValidator.validate.bind(
              this.lessThanZeroValidator
            ),
          ],
          updateOn: 'blur',
        },
      ],
      deprived: [false],
      armor: [0],
      stability: [0],
      cash: [''],
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
      notes: [''],
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

  ngAfterContentInit(): void {
    this.form = this.fb.group({
      name: [this.character.name, Validators.required],
      background: [this.character.background, , Validators.required],
      baseStrength: [this.character.baseStrength],
      modifiedStrength: [this.character.modifiedStrength],
      baseDexterity: [this.character.baseDexterity, ,],
      modifiedDexterity: [this.character.modifiedDexterity],
      baseControl: [this.character.baseControl],
      modifiedControl: [this.character.modifiedControl],
      baseHp: [this.character.baseHp],
      modifiedHp: [this.character.modifiedHp],
      deprived: [this.character.deprived],
      armor: [this.character.armor],
      stability: [this.character.stability],
      cash: [this.character.cash],
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
      notes: [this.character.notes],
    });
  }

  saveCharacter() {
    const changes = this.form.value;

    this.char$ = this.characterStore.saveCharacter(changes);
  }
}
