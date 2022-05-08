import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RelayCardComponent} from './relay-card.component';

describe('RelayComponent', () => {
  let component: RelayCardComponent;
  let fixture: ComponentFixture<RelayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelayCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
