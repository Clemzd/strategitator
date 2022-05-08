import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PopoverRelayDurationComponent} from './popover-relay-duration.component';

describe('PopoverRelayDurationComponent', () => {
  let component: PopoverRelayDurationComponent;
  let fixture: ComponentFixture<PopoverRelayDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopoverRelayDurationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverRelayDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
