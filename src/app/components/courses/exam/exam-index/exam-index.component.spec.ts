import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamIndexComponent } from './exam-index.component';

describe('ExamIndexComponent', () => {
  let component: ExamIndexComponent;
  let fixture: ComponentFixture<ExamIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
