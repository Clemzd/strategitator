import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RaceActionSheetComponent} from './race-action-sheet.component';

describe('RaceActionSheetComponent', () => {
  let component: RaceActionSheetComponent;
  let fixture: ComponentFixture<RaceActionSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceActionSheetComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceActionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
