import {Component, OnInit} from '@angular/core';
import {Relay} from "@models/relay.model";
import {Race} from "@models/race.model";

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
    fuel: false
  });

  relay2 = new Relay({
    pilot: 'Samuel',
    start: '01:55',
    end: '01:40',
    number: 2,
    durationInMinutes: 15,
    fuel: false
  });

  relay3 = new Relay({
    pilot: 'Clément',
    start: '01:40',
    end: '01:20',
    number: 3,
    durationInMinutes: 20,
    fuel: false
  });


  relays = [this.relay1, this.relay2, this.relay3];

  race = new Race({
    location: 'St Michel Chef Chef',
    lengthInHours: 2,
    date: new Date(),
    relays: this.relays
  });

  constructor() {
  }

  ngOnInit(): void {
  }

}
