import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'character-stat',
  templateUrl: './character-stat.component.html',
  styleUrls: ['./character-stat.component.css'],
})
export class CharacterStatComponent {
  @Input()
  statName: string = '';

  baseStat: FormControl = new FormControl('', Validators.min(0));
  currentStat: FormControl = new FormControl('', Validators.min(0));
}
