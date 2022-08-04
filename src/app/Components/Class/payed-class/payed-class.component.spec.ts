import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayedClassComponent } from './payed-class.component';

describe('PayedClassComponent', () => {
  let component: PayedClassComponent;
  let fixture: ComponentFixture<PayedClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayedClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayedClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
