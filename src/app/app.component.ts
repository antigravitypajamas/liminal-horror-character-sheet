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
      name: ['', Validators.required],
      background: ['', Validators.required],
      baseStrength: [0],
      modifiedStrength: [0],
      baseDexterity: [0],
      modifiedDexterity: [0],
      baseControl: [0],
      modifiedControl: [0],
      baseHp: [0],
      modifiedHp: [0],
      deprived: [false],
      armor: [0],
      stability: [0],
      cash: [0],
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
      name: [this.character.name],
      background: [this.character.background],
      baseStrength: [
        this.character.baseStrength,
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
        this.character.modifiedStrength,
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
        this.character.baseDexterity,
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
        this.character.modifiedDexterity,
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
        this.character.baseControl,
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
        this.character.modifiedControl,
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
        this.character.baseHp,
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
        this.character.modifiedHp,
        {
          asyncValidators: [
            this.lessThanZeroValidator.validate.bind(
              this.lessThanZeroValidator
            ),
          ],
          updateOn: 'blur',
        },
      ],
      deprived: [this.character.deprived],
      armor: [
        this.character.armor,
        {
          asyncValidators: [
            this.lessThanZeroValidator.validate.bind(
              this.lessThanZeroValidator
            ),
          ],
          updateOn: 'blur',
        },
      ],
      stability: [
        this.character.stability,
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
