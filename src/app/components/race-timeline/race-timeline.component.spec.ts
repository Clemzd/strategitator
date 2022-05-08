import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RaceTimelineComponent} from './race-timeline.component';

describe('RaceTimelineComponent', () => {
  let component: RaceTimelineComponent;
  let fixture: ComponentFixture<RaceTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceTimelineComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
