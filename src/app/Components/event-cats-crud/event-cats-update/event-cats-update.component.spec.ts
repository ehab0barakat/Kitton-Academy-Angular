import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCatsUpdateComponent } from './event-cats-update.component';

describe('EventCatsUpdateComponent', () => {
  let component: EventCatsUpdateComponent;
  let fixture: ComponentFixture<EventCatsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCatsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCatsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
