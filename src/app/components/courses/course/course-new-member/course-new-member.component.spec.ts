import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNewMemberComponent } from './course-new-member.component';

describe('CourseNewMemberComponent', () => {
  let component: CourseNewMemberComponent;
  let fixture: ComponentFixture<CourseNewMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseNewMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseNewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
