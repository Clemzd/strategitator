import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Race} from "@models/race.model";
import {StateRelay} from "@models/state-relay.enum";
import {GestionnaireEvenementService} from "@app/service/gestionnaire-evenement.service";
import {RaceManagerService} from "@app/service/race-manager.service";

@Component({
  selector: 'app-race-timeline',
  templateUrl: './race-timeline.component.html',
  styleUrls: ['./race-timeline.component.scss']
})
export class RaceTimelineComponent implements OnInit {

  @Input() race!: Race;

  @HostBinding("style.--passed-time-relay-in-percent")
  @Input()
  passedTImeRelayInPercent!: string;

  constructor(private readonly gestionnaireEvenementService: GestionnaireEvenementService, private readonly raceManagerService: RaceManagerService) {
  }

  get StateRelayEnum() {
    return StateRelay;
  }

  ngOnInit(): void {

    this.gestionnaireEvenementService.subscribe('raceTick', () => {
      this.updatePositionProgressPoint();
    });
  }

  private updatePositionProgressPoint(): void {
    this.passedTImeRelayInPercent = `${this.raceManagerService.passedTimeRelayInPercent}%`;
  }
}
