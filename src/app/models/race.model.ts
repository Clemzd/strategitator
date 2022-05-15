import {Relay} from "@models/relay.model";
import {Pilot} from "@models/pilot.model";

export class Race {
  // Base data that won't change over the race
  location: string;
  lengthInHours: number;
  plannedDate: Date;
  effectiveStartDate?: Date;
  relays: Relay[];
  pilots: Pilot[];

  currentIndexRelay: number = -1;

  constructor(options: { location: string, lengthInHours: number, plannedDate: Date, relays: Relay[], pilots: Pilot[] }) {
    this.location = options.location;
    this.lengthInHours = options.lengthInHours;
    this.plannedDate = options.plannedDate;
    this.relays = options.relays;
    this.pilots = options.pilots;
  }
}
