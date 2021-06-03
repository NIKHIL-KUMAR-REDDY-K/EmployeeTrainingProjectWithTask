import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailsBasedOnTrackComponent } from './display-details-based-on-track.component';

describe('DisplayDetailsBasedOnTrackComponent', () => {
  let component: DisplayDetailsBasedOnTrackComponent;
  let fixture: ComponentFixture<DisplayDetailsBasedOnTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailsBasedOnTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDetailsBasedOnTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
