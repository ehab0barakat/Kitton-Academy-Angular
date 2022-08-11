import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassControlingComponent } from './admin-class-controling.component';

describe('AdminClassControlingComponent', () => {
  let component: AdminClassControlingComponent;
  let fixture: ComponentFixture<AdminClassControlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClassControlingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminClassControlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
