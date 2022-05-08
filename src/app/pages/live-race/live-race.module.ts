import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {IonicModule} from '@ionic/angular';
import {LiveRaceComponent} from "./live-race.component";
import {RelayCardModule} from "@components/relay-card/relay-card.module";
import {LiveRaceRoutingModule} from "@pages/live-race/live-race-routing.module";
import {RaceActionSheetModule} from "@components/race-action-sheet/race-action-sheet.module";
import {RaceHeaderModule} from "@components/race-header/race-header.module";
import {PopoverRelayDurationModule} from "@components/popover-relay-duration/popover-relay-duration.module";
import {RaceTimelineModule} from "@components/race-timeline/race-timeline.module";


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RelayCardModule,
    LiveRaceRoutingModule,
    RaceActionSheetModule,
    RaceHeaderModule,
    PopoverRelayDurationModule,
    RaceTimelineModule
  ],
  declarations: [LiveRaceComponent],
})
export class LiveRaceModule {
}
