import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCatsAddComponent } from './event-cats-add.component';

describe('EventCatsAddComponent', () => {
  let component: EventCatsAddComponent;
  let fixture: ComponentFixture<EventCatsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCatsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCatsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
