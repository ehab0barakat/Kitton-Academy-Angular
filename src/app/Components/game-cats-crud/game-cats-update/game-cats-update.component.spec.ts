import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCatsUpdateComponent } from './game-cats-update.component';

describe('GameCatsUpdateComponent', () => {
  let component: GameCatsUpdateComponent;
  let fixture: ComponentFixture<GameCatsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCatsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCatsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
