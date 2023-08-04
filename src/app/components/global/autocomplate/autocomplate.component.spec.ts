import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocomplateComponent } from './autocomplate.component';

describe('AutocomplateComponent', () => {
  let component: AutocomplateComponent;
  let fixture: ComponentFixture<AutocomplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocomplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocomplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
