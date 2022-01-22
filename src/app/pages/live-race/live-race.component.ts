import {Component, OnInit} from '@angular/core';
import {Relay} from "@models/relay.model";
import {Race} from "@models/race.model";
import {StateRelay} from "@models/state-relay.enum";

@Component({
  selector: 'app-live-race',
  templateUrl: './live-race.component.html',
  styleUrls: ['./live-race.component.scss']
})
export class LiveRaceComponent implements OnInit {


  relay1 = new Relay({
    pilot: 'Clément',
    start: '02:00',
    end: '01:55',
    number: 1,
    durationInMinutes: 5,
    fuel: false,
    state: StateRelay.NOT_PASSED
  });

  relay2 = new Relay({
    pilot: 'Samuel',
    start: '01:55',
    end: '01:40',
    number: 2,
    durationInMinutes: 15,
    fuel: false,
    state: StateRelay.NOT_PASSED
  });

  relay3 = new Relay({
    pilot: 'Clément',
    start: '01:40',
    end: '01:20',
    number: 3,
    durationInMinutes: 20,
    fuel: false,
    state: StateRelay.NOT_PASSED
  });

  relay4 = new Relay({
    pilot: 'Samuel',
    start: '01:20',
    end: '01:00',
    number: 4,
    durationInMinutes: 20,
    fuel: false,
    state: StateRelay.NOT_PASSED
  });

  relay5 = new Relay({
    pilot: 'Clément',
    start: '01:00',
    end: '00:50',
    number: 5,
    durationInMinutes: 10,
    fuel: false,
    state: StateRelay.NOT_PASSED
  });

  relay6 = new Relay({
    pilot: 'Samuel',
    start: '00:50',
    end: '00:40',
    number: 6,
    durationInMinutes: 10,
    fuel: false,
    state: StateRelay.NOT_PASSED
  });

  relay7 = new Relay({
    pilot: 'Samuel',
    start: '00:40',
    end: '00:30',
    number: 7,
    durationInMinutes: 10,
    fuel: false,
    state: StateRelay.NOT_PASSED
  })

  relay8 = new Relay({
    pilot: 'Samuel',
    start: '00:30',
    end: '00:20',
    number: 8,
    durationInMinutes: 10,
    fuel: false,
    state: StateRelay.NOT_PASSED
  })

  relay9 = new Relay({
    pilot: 'Samuel',
    start: '00:30',
    end: '00:20',
    number: 9,
    durationInMinutes: 10,
    fuel: false,
    state: StateRelay.NOT_PASSED
  })

  relay10 = new Relay({
    pilot: 'Samuel',
    start: '00:20',
    end: '00:00',
    number: 10,
    durationInMinutes: 20,
    fuel: false,
    state: StateRelay.NOT_PASSED
  })


  relays = [this.relay1, this.relay2, this.relay3, this.relay4, this.relay5, this.relay6, this.relay7, this.relay8, this.relay9, this.relay10];

  race = new Race({
    location: 'St Michel Chef Chef',
    lengthInHours: 2,
    plannedDate: new Date(),
    relays: this.relays
  });

  constructor() {
  }

  ngOnInit(): void {
  }

}
