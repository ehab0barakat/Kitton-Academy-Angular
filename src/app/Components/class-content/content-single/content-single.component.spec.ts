import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSingleComponent } from './content-single.component';

describe('ContentSingleComponent', () => {
  let component: ContentSingleComponent;
  let fixture: ComponentFixture<ContentSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
