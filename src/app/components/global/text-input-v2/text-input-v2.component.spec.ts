import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputV2Component } from './text-input-v2.component';

describe('TextInputV2Component', () => {
  let component: TextInputV2Component;
  let fixture: ComponentFixture<TextInputV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
