import {Relay} from "@models/relay.model";

export class Race {
  location: string;
  lengthInHours: number;
  date: Date;
  relays: Relay[];

  constructor(options: { location: string, lengthInHours: number, date: Date, relays: Relay[] }) {
    this.location = options.location;
    this.lengthInHours = options.lengthInHours;
    this.date = options.date;
    this.relays = options.relays;
  }
}
