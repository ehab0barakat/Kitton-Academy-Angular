import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredClassComponent } from './filtered-class.component';

describe('FilteredClassComponent', () => {
  let component: FilteredClassComponent;
  let fixture: ComponentFixture<FilteredClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
