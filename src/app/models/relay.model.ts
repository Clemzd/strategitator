export class Relay {
  number: number;
  pilot: string;
  start: string;
  end: string;
  durationInMinutes: number;
  fuel: boolean;

  constructor(options: { number: number, pilot: string, start: string, end: string, durationInMinutes: number, fuel: boolean }) {
    this.number = options.number;
    this.pilot = options.pilot;
    this.start = options.start;
    this.end = options.end;
    this.durationInMinutes = options.durationInMinutes;
    this.fuel = options.fuel;
  }
}
