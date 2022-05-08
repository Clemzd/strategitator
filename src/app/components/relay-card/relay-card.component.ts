import {Component, Input, OnInit} from '@angular/core';
import {Relay} from "@models/relay.model";
import {StateRelay} from "@models/state-relay.enum";
import {Pilot} from "@models/pilot.model";
import {PopoverController} from "@ionic/angular";
import {PopoverRelayDurationComponent} from "@components/popover-relay-duration/popover-relay-duration.component";

@Component({
  selector: 'app-card-relay',
  templateUrl: './relay-card.component.html',
  styleUrls: ['./relay-card.component.scss']
})
export class RelayCardComponent implements OnInit {

  @Input() relay!: Relay;
  @Input() pilots!: Pilot[];

  customAlertOptions: any = {
    header: 'Pilote',
    mode: 'ios',
    translucent: true
  };

  constructor(private popoverController: PopoverController) {
  }

  get StateRelayEnum() {
    return StateRelay;
  }

  ngOnInit(): void {
  }

  async askChangeDuration() {
    const popover = await this.popoverController.create({
      component: PopoverRelayDurationComponent,
      componentProps: {
        duration: `00:${this.relay.durationInMinutes.toString().padStart(2, '0')}`
      },
      cssClass: 'my-custom-class',
      translucent: true,
      mode: 'ios'
    });
    await popover.present();

    const {role} = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
