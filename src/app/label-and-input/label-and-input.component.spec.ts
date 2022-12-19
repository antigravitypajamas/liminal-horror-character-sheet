import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelAndInputComponent } from './label-and-input.component';

describe('LabelAndInputComponent', () => {
  let component: LabelAndInputComponent;
  let fixture: ComponentFixture<LabelAndInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelAndInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelAndInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
