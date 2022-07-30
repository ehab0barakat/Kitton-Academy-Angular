import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCatsIndexComponent } from './event-cats-index.component';

describe('EventCatsIndexComponent', () => {
  let component: EventCatsIndexComponent;
  let fixture: ComponentFixture<EventCatsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCatsIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCatsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
