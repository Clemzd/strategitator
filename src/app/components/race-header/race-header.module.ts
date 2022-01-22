import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RaceHeaderComponent} from './race-header.component';
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [
    RaceHeaderComponent
  ],
  exports: [
    RaceHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class RaceHeaderModule {
}
