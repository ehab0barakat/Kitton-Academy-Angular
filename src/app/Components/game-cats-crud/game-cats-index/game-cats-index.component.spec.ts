import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCatsIndexComponent } from './game-cats-index.component';

describe('GameCatsIndexComponent', () => {
  let component: GameCatsIndexComponent;
  let fixture: ComponentFixture<GameCatsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCatsIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCatsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
