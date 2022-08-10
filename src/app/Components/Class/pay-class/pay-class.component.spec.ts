import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayClassComponent } from './pay-class.component';

describe('PayClassComponent', () => {
  let component: PayClassComponent;
  let fixture: ComponentFixture<PayClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
