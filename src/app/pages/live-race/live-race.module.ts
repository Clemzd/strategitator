import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {IonicModule} from '@ionic/angular';
import {LiveRaceComponent} from "./live-race.component";
import {RelayModule} from "@components/relay/relay.module";
import {LiveRaceRoutingModule} from "@pages/live-race/live-race-routing.module";
import {RaceActionSheetModule} from "@components/race-action-sheet/race-action-sheet.module";
import {RaceHeaderModule} from "@components/race-header/race-header.module";


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RelayModule,
    LiveRaceRoutingModule,
    RaceActionSheetModule,
    RaceHeaderModule
  ],
  declarations: [LiveRaceComponent],
})
export class LiveRaceModule {
}
