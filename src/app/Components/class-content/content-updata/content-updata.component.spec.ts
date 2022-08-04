import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentUpdataComponent } from './content-updata.component';

describe('ContentUpdataComponent', () => {
  let component: ContentUpdataComponent;
  let fixture: ComponentFixture<ContentUpdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentUpdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentUpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
