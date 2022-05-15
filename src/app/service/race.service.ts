import {Injectable} from "@angular/core";
import {Race} from "@models/race.model";

@Injectable({
  providedIn: 'root',
})
export class RaceService {

  public put(race: Race): Race {
    localStorage.setItem('race', JSON.stringify(race));
    return race;
  }

  public get(): Race | undefined {
    const rawRace = localStorage.getItem('race');
    let race;
    if (rawRace) {
      race = JSON.parse(rawRace);
      race.effectiveStartDate = new Date(race.effectiveStartDate);
    }
    return race;
  }

}
