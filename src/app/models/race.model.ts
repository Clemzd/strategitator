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

  // Datas that are calculated during the race
  currentIndexRelay: number = -1;
  ongoing: boolean = false;
  remaningHours: number;
  remaningMinutes: number;
  remaningSeconds: number;
  progressPercentage = 0;

  constructor(options: { location: string, lengthInHours: number, plannedDate: Date, relays: Relay[], pilots: Pilot[] }) {
    this.location = options.location;
    this.lengthInHours = options.lengthInHours;
    this.plannedDate = options.plannedDate;
    this.relays = options.relays;
    this.pilots = options.pilots;

    this.remaningHours = this.lengthInHours;
    this.remaningMinutes = 0;
    this.remaningSeconds = 0;
  }

  get lengthInSeconds() {
    return this.lengthInHours * 3600;
  }
}
