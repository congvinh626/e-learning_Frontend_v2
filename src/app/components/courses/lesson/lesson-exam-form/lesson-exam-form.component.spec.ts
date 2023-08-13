import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonExamFormComponent } from './lesson-exam-form.component';

describe('LessonExamFormComponent', () => {
  let component: LessonExamFormComponent;
  let fixture: ComponentFixture<LessonExamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonExamFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonExamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
