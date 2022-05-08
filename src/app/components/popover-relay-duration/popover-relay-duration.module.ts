import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopoverRelayDurationComponent} from './popover-relay-duration.component';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PopoverRelayDurationComponent
  ],
  exports: [
    PopoverRelayDurationComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class PopoverRelayDurationModule {
}
