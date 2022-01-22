import {StateRelay} from "@models/state-relay.enum";

export class Relay {
  number: number;
  pilot: string;
  start: string;
  end: string;
  durationInMinutes: number;
  fuel: boolean;
  state: StateRelay;

  constructor(options: { number: number, pilot: string, start: string, end: string, durationInMinutes: number, fuel: boolean, state: StateRelay }) {
    this.number = options.number;
    this.pilot = options.pilot;
    this.start = options.start;
    this.end = options.end;
    this.durationInMinutes = options.durationInMinutes;
    this.fuel = options.fuel;
    this.state = options.state;
  }
}
