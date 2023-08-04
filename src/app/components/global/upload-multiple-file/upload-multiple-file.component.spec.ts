import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMultipleFileComponent } from './upload-multiple-file.component';

describe('UploadMultipleFileComponent', () => {
  let component: UploadMultipleFileComponent;
  let fixture: ComponentFixture<UploadMultipleFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadMultipleFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadMultipleFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
