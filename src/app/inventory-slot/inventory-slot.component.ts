import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'inventory-slot',
  templateUrl: './inventory-slot.component.html',
  styleUrls: ['./inventory-slot.component.css'],
})
export class InventorySlotComponent {
  @Input()
  handed: boolean = false;

  @Input()
  hand: 'R. HAND' | 'L. HAND' | '' = '';

  inventoryItemControl: FormControl = new FormControl('');
}
