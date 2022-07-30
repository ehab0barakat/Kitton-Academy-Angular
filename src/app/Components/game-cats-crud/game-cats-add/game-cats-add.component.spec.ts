import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCatsAddComponent } from './game-cats-add.component';

describe('GameCatsAddComponent', () => {
  let component: GameCatsAddComponent;
  let fixture: ComponentFixture<GameCatsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCatsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCatsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
