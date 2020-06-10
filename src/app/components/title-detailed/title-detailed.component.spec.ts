import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDetailedComponent } from './title-detailed.component';

describe('TitleDetailedComponent', () => {
  let component: TitleDetailedComponent;
  let fixture: ComponentFixture<TitleDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
