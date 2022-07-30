import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCatsDeleteComponent } from './game-cats-delete.component';

describe('GameCatsDeleteComponent', () => {
  let component: GameCatsDeleteComponent;
  let fixture: ComponentFixture<GameCatsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCatsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCatsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
