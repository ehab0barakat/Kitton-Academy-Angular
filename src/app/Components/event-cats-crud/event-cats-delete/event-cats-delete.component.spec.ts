import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCatsDeleteComponent } from './event-cats-delete.component';

describe('EventCatsDeleteComponent', () => {
  let component: EventCatsDeleteComponent;
  let fixture: ComponentFixture<EventCatsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCatsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCatsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
