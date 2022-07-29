import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatClassComponent } from './add-cat-class.component';

describe('AddCatClassComponent', () => {
  let component: AddCatClassComponent;
  let fixture: ComponentFixture<AddCatClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCatClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCatClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
