import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {GestureController, GestureDetail} from "@ionic/angular";

@Component({
  selector: 'app-race-action-sheet',
  templateUrl: './race-action-sheet.component.html',
  styleUrls: ['./race-action-sheet.component.scss']
})
export class RaceActionSheetComponent implements OnInit {

  @ViewChild('actionSheet', {static: true})
  private actionSheet!: ElementRef<HTMLDivElement>;

  constructor(private gestureCtrl: GestureController, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const gesture = this.gestureCtrl.create({
      gestureName: 'resize-race-action-sheet',
      el: this.actionSheet.nativeElement,
      gesturePriority: 100,
      passive: false,
      direction: 'y',
      onStart: () => {
        this.renderer.setStyle(this.actionSheet.nativeElement, "transition", "none");
      },
      onEnd: (detail) => {
        this.onEnd(detail);
      }
    })

    gesture.enable();
  }

  private onEnd(detail: GestureDetail) {
    this.renderer.setStyle(this.actionSheet.nativeElement, "transition", "0.2s ease-out");
    console.log(detail);
    if (detail.deltaY < 50) {
      this.renderer.setStyle(
        this.actionSheet.nativeElement,
        "height",
        `230px`
      );
    } else {
      this.renderer.setStyle(
        this.actionSheet.nativeElement,
        "height",
        `100px`
      );
    }
  }
}
