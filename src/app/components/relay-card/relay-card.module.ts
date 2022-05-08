import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RelayCardComponent} from './relay-card.component';
import {IonicModule} from "@ionic/angular";
import {BadgeModule} from "../badge/badge.module";


@NgModule({
  declarations: [
    RelayCardComponent
  ],
  exports: [
    RelayCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    BadgeModule
  ]
})
export class RelayCardModule {
}
