import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCatClassComponent } from './crud-cat-class.component';

describe('CrudCatClassComponent', () => {
  let component: CrudCatClassComponent;
  let fixture: ComponentFixture<CrudCatClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCatClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudCatClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
