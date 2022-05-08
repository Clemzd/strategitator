import {Injectable} from "@angular/core";
import {Race} from "@models/race.model";
import {interval, Subscription} from "rxjs";
import {DateUtils} from "@app/utils/date-utils";
import {StateRelay} from "@models/state-relay.enum";

@Injectable({
  providedIn: 'root',
})
export class RaceService {

  public currenTime?: Date;
  public passedTimeInSeconds: number = 0;
  public timer$?: Subscription;

  /**
   * Speed in seconds.
   */
  public speed = 60 * 5;

  public start(race: Race): void {
    race.ongoing = true;
    race.currentIndexRelay = 0;
    race.relays[race.currentIndexRelay].state = StateRelay.IN_PROGRESS;
    race.effectiveStartDate = new Date();
    this.currenTime = new Date();

    this.timer$ = interval(1000).subscribe(() => {
      if (!this.currenTime || !race.effectiveStartDate) {
        return;
      }

      this.currenTime = DateUtils.addSeconds(this.currenTime, this.speed);
      this.passedTimeInSeconds = DateUtils.getDifferenceInSeconds(this.currenTime, race.effectiveStartDate);

      if (this.passedTimeInSeconds > race.lengthInSeconds && this.timer$) {
        // course finie
        this.timer$.unsubscribe();
      } else {
        this.tick(race);
      }

    });
  };

  public changeRelay(race: Race): void {
    race.relays[race.currentIndexRelay].state = StateRelay.PAST;
    race.currentIndexRelay += 1;
    race.relays[race.currentIndexRelay].state = StateRelay.IN_PROGRESS;
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

  /**
   * Run every second.
   */
  private tick(race: Race): void {
    this.calculateTotalProgress(race);
  }

  private calculateTotalProgress(race: Race): void {
    race.progressPercentage = this.passedTimeInSeconds / race.lengthInSeconds;
    race.remaningHours = Math.trunc((race.lengthInSeconds - this.passedTimeInSeconds) / 3600);
    race.remaningMinutes = Math.trunc((race.lengthInSeconds - this.passedTimeInSeconds) / 60) % 60;
    race.remaningSeconds = (race.lengthInSeconds - this.passedTimeInSeconds) % 60;
  }

}
