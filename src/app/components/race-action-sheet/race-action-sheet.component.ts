import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ActionSheetController, AlertController, GestureController, GestureDetail} from "@ionic/angular";
import {RaceManagerService} from "@app/service/race-manager.service";

@Component({
  selector: 'app-race-action-sheet',
  templateUrl: './race-action-sheet.component.html',
  styleUrls: ['./race-action-sheet.component.scss']
})
export class RaceActionSheetComponent implements OnInit {

  @ViewChild('barSheet', {static: true})
  private barSheet!: ElementRef<HTMLDivElement>;

  private startingExpandingHeight = 0;


  constructor(private gestureCtrl: GestureController, private renderer: Renderer2, private alertController: AlertController, private actionSheetController: ActionSheetController, public raceManagerService: RaceManagerService) {
  }

  ngOnInit(): void {
    const gesture = this.gestureCtrl.create({
      gestureName: 'resize-race-action-sheet',
      el: this.barSheet.nativeElement,
      gesturePriority: 100,
      passive: false,
      direction: 'y',
      onStart: () => {
        this.renderer.setStyle(this.barSheet.nativeElement, "transition", "none");
        this.startingExpandingHeight = this.barSheet.nativeElement.clientHeight;
      },
      onMove: (detail) => {
        const newHeight = this.startingExpandingHeight - detail.deltaY;
        if (detail.deltaY < 20) {
          this.renderer.setStyle(this.barSheet.nativeElement, "height", `${newHeight}px`);
        }
      },
      onEnd: (detail) => {
        this.onEnd(detail);
      }
    })

    gesture.enable();
  }

  private onEnd(detail: GestureDetail) {
    this.startingExpandingHeight = 0;
    this.renderer.setStyle(this.barSheet.nativeElement, "transition", "0.1s ease-out");
    if (detail.deltaY < 50) {
      this.renderer.setStyle(
        this.barSheet.nativeElement,
        "height",
        `var(--expanded-height-action-sheet)`
      );
    } else {
      this.renderer.setStyle(
        this.barSheet.nativeElement,
        "height",
        `var(--default-height-action-sheet)`
      );
    }
  }

  async showSettings() {
    const actionSheet = await this.actionSheetController.create({
      header: 'R??glages de la course',
      mode: 'ios',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Changer les relais',
        icon: 'create-outline',
        handler: () => {
          this.raceManagerService.askEdit(this.raceManagerService.race);
        }
      }, {
        text: 'Mettre en pause',
        icon: 'pause-circle-outline',
        handler: () => {
          this.raceManagerService.pause();
          console.log('Play clicked');
        }
      }, {
        text: 'Ajuster le Chrono',
        icon: 'timer-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const {role, data} = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  async changeRelay() {
    const alert = await this.alertController.create({
      mode: "ios",
      cssClass: 'my-custom-class',
      header: 'Confirmer',
      message: 'Relais termin??',
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
          text: 'Ok',
          id: 'confirm-button',
          handler: () => {
            this.raceManagerService.changeRelay();
          }
        }
      ]
    });

    await alert.present();
  }
}
