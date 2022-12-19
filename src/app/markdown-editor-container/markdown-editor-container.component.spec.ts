import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownEditorContainerComponent } from './markdown-editor-container.component';

describe('MarkdownEditorContainerComponent', () => {
  let component: MarkdownEditorContainerComponent;
  let fixture: ComponentFixture<MarkdownEditorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownEditorContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
