import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RaceTimelineComponent} from './race-timeline.component';


@NgModule({
  declarations: [
    RaceTimelineComponent
  ],
  exports: [
    RaceTimelineComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RaceTimelineModule {
}
