import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {GestureController, GestureDetail} from "@ionic/angular";

@Component({
  selector: 'app-race-action-sheet',
  templateUrl: './race-action-sheet.component.html',
  styleUrls: ['./race-action-sheet.component.scss']
})
export class RaceActionSheetComponent implements OnInit {

  @ViewChild('barSheet', {static: true})
  private barSheet!: ElementRef<HTMLDivElement>;

  private startingExpandingHeight = 0;

  constructor(private gestureCtrl: GestureController, private renderer: Renderer2) {
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
        this.renderer.setStyle(this.barSheet.nativeElement, "height", `${newHeight}px`);
      },
      onEnd: (detail) => {
        this.onEnd(detail);
      }
    })

    gesture.enable();
  }

  private onEnd(detail: GestureDetail) {
    this.startingExpandingHeight = 0;
    this.renderer.setStyle(this.barSheet.nativeElement, "transition", "0.3s ease-out");
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
}
