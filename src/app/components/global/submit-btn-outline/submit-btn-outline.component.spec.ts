import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitBtnOutlineComponent } from './submit-btn-outline.component';

describe('SubmitBtnOutlineComponent', () => {
  let component: SubmitBtnOutlineComponent;
  let fixture: ComponentFixture<SubmitBtnOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitBtnOutlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitBtnOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
