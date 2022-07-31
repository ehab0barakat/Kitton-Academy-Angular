import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlachAdminComponent } from './slach-admin.component';

describe('SlachAdminComponent', () => {
  let component: SlachAdminComponent;
  let fixture: ComponentFixture<SlachAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlachAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlachAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
