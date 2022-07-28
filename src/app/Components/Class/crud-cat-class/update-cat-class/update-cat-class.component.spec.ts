import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCatClassComponent } from './update-cat-class.component';

describe('UpdateCatClassComponent', () => {
  let component: UpdateCatClassComponent;
  let fixture: ComponentFixture<UpdateCatClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCatClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCatClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
