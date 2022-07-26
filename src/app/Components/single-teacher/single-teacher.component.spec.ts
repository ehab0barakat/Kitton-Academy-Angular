import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTeacherComponent } from './single-teacher.component';

describe('SingleTeacherComponent', () => {
  let component: SingleTeacherComponent;
  let fixture: ComponentFixture<SingleTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
