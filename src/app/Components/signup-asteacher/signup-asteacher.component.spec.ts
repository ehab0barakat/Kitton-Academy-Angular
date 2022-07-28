import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAsteacherComponent } from './signup-asteacher.component';

describe('SignupAsteacherComponent', () => {
  let component: SignupAsteacherComponent;
  let fixture: ComponentFixture<SignupAsteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupAsteacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupAsteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
