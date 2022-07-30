import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninAsadminComponent } from './signin-asadmin.component';

describe('SigninAsadminComponent', () => {
  let component: SigninAsadminComponent;
  let fixture: ComponentFixture<SigninAsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninAsadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninAsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
