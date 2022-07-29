import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatClassComponent } from './cat-class.component';

describe('CatClassComponent', () => {
  let component: CatClassComponent;
  let fixture: ComponentFixture<CatClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
