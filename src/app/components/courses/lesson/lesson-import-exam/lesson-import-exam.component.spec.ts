import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonImportExamComponent } from './lesson-import-exam.component';

describe('LessonImportExamComponent', () => {
  let component: LessonImportExamComponent;
  let fixture: ComponentFixture<LessonImportExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonImportExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonImportExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
