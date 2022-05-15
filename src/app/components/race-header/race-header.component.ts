import {Component, Input, OnInit} from '@angular/core';
import {AlertController} from "@ionic/angular";
import {Race} from "@models/race.model";
import {RaceManagerService} from "@app/service/race-manager.service";

@Component({
  selector: 'app-race-header',
  templateUrl: './race-header.component.html',
  styleUrls: ['./race-header.component.scss']
})
export class RaceHeaderComponent implements OnInit {

  @Input()
  public race!: Race;

  constructor(public alertController: AlertController, public raceManagerService: RaceManagerService) {
  }

  ngOnInit(): void {
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      mode: "ios",
      header: 'Démarrer la course ?',
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
            this.raceManagerService.startOrResume(this.race);
          }
        }
      ]
    });

    await alert.present();
  }

  public goFaster(): void {
    this.raceManagerService.goFaster();
  }


}
