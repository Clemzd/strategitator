import {Component, Input, OnInit} from '@angular/core';
import {Race} from "@models/race.model";
import {StateRelay} from "@models/state-relay.enum";

@Component({
  selector: 'app-race-timeline',
  templateUrl: './race-timeline.component.html',
  styleUrls: ['./race-timeline.component.scss']
})
export class RaceTimelineComponent implements OnInit {

  @Input() race!: Race;

  constructor() {
  }

  get StateRelayEnum() {
    return StateRelay;
  }

  ngOnInit(): void {
  }
}
