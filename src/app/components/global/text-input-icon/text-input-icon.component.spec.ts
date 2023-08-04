import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputIconComponent } from './text-input-icon.component';

describe('TextInputIconComponent', () => {
  let component: TextInputIconComponent;
  let fixture: ComponentFixture<TextInputIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
