import {Injectable} from "@angular/core";
import {Race} from "@models/race.model";
import {interval, Subscription} from "rxjs";
import {DateUtils} from "@app/utils/date-utils";
import {StateRelay} from "@models/state-relay.enum";
import {RaceService} from "@app/service/race.service";
import {GestionnaireEvenementService} from "@app/service/gestionnaire-evenement.service";

@Injectable({
  providedIn: 'root',
})
export class RaceManagerService {

  public race!: Race;

  public currenTime?: Date;
  public passedTimeInSeconds: number = 0;
  public timer$?: Subscription;

  // datas concerning the race updating every tick
  public ongoing: boolean = false;
  public progressPercentage = 0;
  public remaningHoursRace?: number;
  public remaningMinutesRace?: number;
  public remaningSecondsRace?: number;
  public remaningMinutesNextRelay?: number;
  public remaningSecondsNextRelay?: number;
  public passedTimeRelayInPercent = 0;
  /**
   * Speed in seconds.
   */
  public speed = 60 * 5;

  constructor(private readonly raceService: RaceService, private readonly gestionnaireEveneemntService: GestionnaireEvenementService) {
  }

  public startOrResume(race: Race, resume: boolean = false): void {
    this.ongoing = true;

    if (!resume) {
      race.effectiveStartDate = new Date();
      race.currentIndexRelay = 0;
    }

    for (let indexRelay = 0; indexRelay < race.currentIndexRelay; indexRelay++) {
      race.relays[race.currentIndexRelay].state = StateRelay.PAST;
    }

    race.relays[race.currentIndexRelay].state = StateRelay.IN_PROGRESS;

    this.currenTime = new Date();
    this.raceService.put(race);

    this.timer$ = interval(1000).subscribe(() => {
      const race = this.raceService.get();

      if (!this.currenTime || !race || !race.effectiveStartDate) {
        return;
      }

      this.currenTime = new Date();
      this.passedTimeInSeconds = DateUtils.getDifferenceInSeconds(this.currenTime, race.effectiveStartDate);

      if (this.passedTimeInSeconds > DateUtils.hoursToSeconds(race.lengthInHours) && this.timer$) {
        // course finie
        this.timer$.unsubscribe();
      } else {
        this.tick(race);
        this.gestionnaireEveneemntService.broadcast({name: 'raceTick'});
      }

    });
  };

  public pause(): void {
    if (this.timer$) {
      this.timer$.unsubscribe();
    }
  }

  public changeRelay(): void {
    this.race.relays[this.race.currentIndexRelay].state = StateRelay.PAST;
    this.race.currentIndexRelay += 1;
    this.race.relays[this.race.currentIndexRelay].state = StateRelay.IN_PROGRESS;
    this.raceService.put(this.race);
  }

  public askEdit(race: Race): void {
    race.relays.forEach(r => r.editable = true);
  }

  public askView(race: Race): void {
    race.relays.forEach(r => r.editable = false);
  }

  public goFaster(): void {
    this.speed += 60;
  }

  public calculatepassedTimeRelayInPercent(race: Race): void {
    if (!this.remaningMinutesNextRelay || !this.remaningSecondsNextRelay) {
      return;
    }

    const currentDurationRelayInMinutes = race.relays[race.currentIndexRelay].durationInMinutes;

    /// in time meaning 1.24 something like that
    const passedTimeRelayInTime = currentDurationRelayInMinutes - this.remaningMinutesNextRelay - (this.remaningSecondsNextRelay / 60);
    this.passedTimeRelayInPercent = (passedTimeRelayInTime / currentDurationRelayInMinutes) * 100;
  }

  /**
   * Run every second.
   */
  private tick(race: Race): void {
    this.calculateTotalProgress(race);
    this.calculateNextRelayInformation(race);
    this.calculatepassedTimeRelayInPercent(race);
    this.race = this.raceService.put(race);
  }

  private calculateTotalProgress(race: Race): void {
    this.progressPercentage = this.passedTimeInSeconds / DateUtils.hoursToSeconds(race.lengthInHours);
    this.remaningHoursRace = Math.trunc((DateUtils.hoursToSeconds(race.lengthInHours) - this.passedTimeInSeconds) / 3600);
    this.remaningMinutesRace = Math.trunc((DateUtils.hoursToSeconds(race.lengthInHours) - this.passedTimeInSeconds) / 60) % 60;
    this.remaningSecondsRace = (DateUtils.hoursToSeconds(race.lengthInHours) - this.passedTimeInSeconds) % 60;
  }

  private calculateNextRelayInformation(race: Race): void {
    if (!race.effectiveStartDate) {
      return;
    }

    const nextRelayStart = race.relays[race.currentIndexRelay + 1].start.split(":");
    const nextRelayHours = parseInt(nextRelayStart[0]);
    const nextRelayMinutes = parseInt(nextRelayStart[1]);

    const timeBeetweenRaceAndNextRelayInSeconds = (race.lengthInHours - nextRelayHours - nextRelayMinutes / 60) * 3600;

    const dateNextRelay = DateUtils.addSeconds(race.effectiveStartDate, timeBeetweenRaceAndNextRelayInSeconds);
    const remaningSecondsNextRelay = DateUtils.getDifferenceInSeconds(dateNextRelay, new Date());

    this.remaningSecondsNextRelay = Math.trunc(remaningSecondsNextRelay % 60);
    // Math.trunc otherwise the angular decimal pipe will do rounding above, like 5 for 4 minutes and 50 seconds
    this.remaningMinutesNextRelay = Math.trunc((remaningSecondsNextRelay / 60) % 60);
  }

}
