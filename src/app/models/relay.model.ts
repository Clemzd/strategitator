import {StateRelay} from "@models/state-relay.enum";

export class Relay {
  number: number;
  pilotId: number;
  pilotName: string;
  start: string;
  end: string;
  durationInMinutes: number;
  fuel: boolean;
  state: StateRelay;
  editable: boolean = false;

  constructor(options: { number: number, pilotId: number, pilotName: string, start: string, end: string, durationInMinutes: number, fuel: boolean, state: StateRelay }) {
    this.number = options.number;
    this.pilotId = options.pilotId;
    this.pilotName = options.pilotName;
    this.start = options.start;
    this.end = options.end;
    this.durationInMinutes = options.durationInMinutes;
    this.fuel = options.fuel;
    this.state = options.state;
  }
}
