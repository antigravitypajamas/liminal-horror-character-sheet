import { NotificationService } from './services/notification.service';
import { MarkdownService } from 'ngx-markdown';
import { LessThanZeroValidator } from './services/less-than-zero.validator';
import { Observable, map, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Character } from './models/character';
import { CharacterStore } from './services/character.store';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { EditorOption } from 'angular-markdown-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkdownService],
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
    private lessThanZeroValidator: LessThanZeroValidator,
    private markdownService: MarkdownService,
    private notificationService: NotificationService
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

    if (this.char$) {
      this.char$.subscribe();
    }

    this.editorOptions = {
      parser: (val) => this.markdownService.parse(val.trim()),
    };
  }

  ngAfterContentInit(): void {
    this.form = this.fb.group({
      name: [this.character.name, Validators.required],
      background: [this.character.background, Validators.required],
      baseStrength: [
        this.character.baseStrength ? this.character.baseStrength : 0,
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
        this.character.baseDexterity ? this.character.baseDexterity : 0,
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
        this.character.baseControl ? this.character.baseControl : 0,
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
        this.character.baseHp ? this.character.baseHp : 0,
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

    this.loadFatigue();

    this.listenForFatigue();

    this.form.get('modifiedHp')?.valueChanges.subscribe((value) => {
      if (value <= 0) {
        this.notificationService.showWarning(
          'Roll for Fallout!',
          `You've been reduced to ${value} HP!`
        );
      }
    });
  }

  saveCharacter() {
    const changes = this.form.value;

    this.char$ = this.characterStore.saveCharacter(changes);
    this.notificationService.showSuccess('Character saved successfully!');
  }

  private loadFatigue(): void {
    if (this.form.get('fatigue1')?.value) {
      this.form.get('inventoryRightHand')?.disable();
    } else {
      this.form.get('inventoryRightHand')?.enable();
    }

    if (this.form.get('fatigue2')?.value) {
      this.form.get('inventoryLeftHand')?.disable();
    } else {
      this.form.get('inventoryLeftHand')?.enable();
    }

    if (this.form.get('fatigue3')?.value) {
      this.form.get('inventorySlot3')?.disable();
    } else {
      this.form.get('inventorySlot3')?.enable();
    }
    if (this.form.get('fatigue4')?.value) {
      this.form.get('inventorySlot4')?.disable();
    } else {
      this.form.get('inventorySlot4')?.enable();
    }

    if (this.form.get('fatigue5')?.value) {
      this.form.get('inventorySlot5')?.disable();
    } else {
      this.form.get('inventorySlot5')?.enable();
    }

    if (this.form.get('fatigue6')?.value) {
      this.form.get('inventorySlot6')?.disable();
    } else {
      this.form.get('inventorySlot6')?.enable();
    }

    if (this.form.get('fatigue7')?.value) {
      this.form.get('inventorySlot7')?.disable();
    } else {
      this.form.get('inventorySlot7')?.enable();
    }

    if (this.form.get('fatigue8')?.value) {
      this.form.get('inventorySlot8')?.disable();
    } else {
      this.form.get('inventorySlot8')?.enable();
    }

    if (this.form.get('fatigue9')?.value) {
      this.form.get('inventorySlot9')?.disable();
    } else {
      this.form.get('inventorySlot9')?.enable();
    }

    if (this.form.get('fatigue10')?.value) {
      this.form.get('inventorySlot10')?.disable();
    } else {
      this.form.get('inventorySlot10')?.enable();
    }
  }

  private listenForFatigue(): void {
    this.form.get('fatigue1')?.valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('inventoryRightHand')?.disable();
      } else {
        this.form.get('inventoryRightHand')?.enable();
      }
    });
    this.form.get('fatigue2')?.valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('inventoryLeftHand')?.disable();
      } else {
        this.form.get('inventoryLeftHand')?.enable();
      }
    });
    this.form.get('fatigue3')?.valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('inventorySlot3')?.disable();
      } else {
        this.form.get('inventorySlot3')?.enable();
      }
    });
    this.form.get('fatigue4')?.valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('inventorySlot4')?.disable();
      } else {
        this.form.get('inventorySlot4')?.enable();
      }
    });
    this.form.get('fatigue5')?.valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('inventorySlot5')?.disable();
      } else {
        this.form.get('inventorySlot5')?.enable();
      }
    });
    this.form.get('fatigue6')?.valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('inventorySlot6')?.disable();
      } else {
        this.form.get('inventorySlot6')?.enable();
      }
    });
    this.form.get('fatigue7')?.valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('inventorySlot7')?.disable();
      } else {
        this.form.get('inventorySlot7')?.enable();
      }
    });
    this.form.get('fatigue8')?.valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('inventorySlot8')?.disable();
      } else {
        this.form.get('inventorySlot8')?.enable();
      }
    });
    this.form.get('fatigue9')?.valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('inventorySlot9')?.disable();
      } else {
        this.form.get('inventorySlot9')?.enable();
      }
    });
    this.form.get('fatigue10')?.valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('inventorySlot10')?.disable();
      } else {
        this.form.get('inventorySlot10')?.enable();
      }
    });
  }
}
