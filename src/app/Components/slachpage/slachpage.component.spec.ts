import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlachpageComponent } from './slachpage.component';

describe('SlachpageComponent', () => {
  let component: SlachpageComponent;
  let fixture: ComponentFixture<SlachpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlachpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlachpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
