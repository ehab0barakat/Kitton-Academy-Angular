import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudGameComponent } from './crud-game.component';

describe('CrudGameComponent', () => {
  let component: CrudGameComponent;
  let fixture: ComponentFixture<CrudGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
