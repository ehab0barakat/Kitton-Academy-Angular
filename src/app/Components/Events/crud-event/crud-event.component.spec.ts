import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEventComponent } from './crud-event.component';

describe('CrudEventComponent', () => {
  let component: CrudEventComponent;
  let fixture: ComponentFixture<CrudEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
