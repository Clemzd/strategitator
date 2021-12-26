import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RaceActionSheetComponent} from './race-action-sheet.component';
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [
    RaceActionSheetComponent
  ],
  exports: [
    RaceActionSheetComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class RaceActionSheetModule {
}
