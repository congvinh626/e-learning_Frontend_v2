import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputWithLabelComponent } from './text-input-with-label.component';

describe('TextInputWithLabelComponent', () => {
  let component: TextInputWithLabelComponent;
  let fixture: ComponentFixture<TextInputWithLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputWithLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
