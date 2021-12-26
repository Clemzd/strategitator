import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RelayComponent} from './relay.component';
import {IonicModule} from "@ionic/angular";
import {BadgeModule} from "../badge/badge.module";


@NgModule({
  declarations: [
    RelayComponent
  ],
  exports: [
    RelayComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    BadgeModule
  ]
})
export class RelayModule {
}
