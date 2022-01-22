import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RaceHeaderComponent} from './race-header.component';

describe('RaceHeaderComponent', () => {
  let component: RaceHeaderComponent;
  let fixture: ComponentFixture<RaceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
