import {Component, Input, OnInit} from '@angular/core';
import {AlertController} from "@ionic/angular";
import {Race} from "@models/race.model";
import {RaceService} from "@app/service/race.service";

@Component({
  selector: 'app-race-header',
  templateUrl: './race-header.component.html',
  styleUrls: ['./race-header.component.scss']
})
export class RaceHeaderComponent implements OnInit {

  @Input()
  public race!: Race;

  constructor(public alertController: AlertController, public raceService: RaceService) {
  }

  ngOnInit(): void {
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      mode: "ios",
      cssClass: 'my-custom-class',
      header: 'Confirmer',
      message: 'Vous pouvez toujours annuler et repartir de zéro',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Go !',
          id: 'confirm-button',
          handler: () => {
            this.raceService.start(this.race);
          }
        }
      ]
    });

    await alert.present();
  }

  public goFaster(): void {
    this.raceService.goFaster();
  }


}
