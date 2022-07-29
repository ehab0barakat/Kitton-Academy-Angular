import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCatClassComponent } from './delete-cat-class.component';

describe('DeleteCatClassComponent', () => {
  let component: DeleteCatClassComponent;
  let fixture: ComponentFixture<DeleteCatClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCatClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCatClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
