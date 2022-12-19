import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'label-and-input',
  templateUrl: './label-and-input.component.html',
  styleUrls: ['./label-and-input.component.css'],
})
export class LabelAndInputComponent {
  @Input()
  label: string = '';

  @Input()
  type: 'text' | 'number' = 'text';

  @Input()
  class: string = 'label-and-input';
  control = new FormControl('');
}
