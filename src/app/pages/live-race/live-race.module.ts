import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {IonicModule} from '@ionic/angular';
import {LiveRaceComponent} from "./live-race.component";
import {RelayModule} from "@components/relay/relay.module";
import {LiveRaceRoutingModule} from "@pages/live-race/live-race-routing.module";


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RelayModule,
    LiveRaceRoutingModule
  ],
  declarations: [LiveRaceComponent],
})
export class LiveRaceModule {
}
