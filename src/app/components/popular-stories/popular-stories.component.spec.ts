import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularStoriesComponent } from './popular-stories.component';

describe('PopularStoriesComponent', () => {
  let component: PopularStoriesComponent;
  let fixture: ComponentFixture<PopularStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
