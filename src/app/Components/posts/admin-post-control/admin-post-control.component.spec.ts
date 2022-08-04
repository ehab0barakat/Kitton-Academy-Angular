import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostControlComponent } from './admin-post-control.component';

describe('AdminPostControlComponent', () => {
  let component: AdminPostControlComponent;
  let fixture: ComponentFixture<AdminPostControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
