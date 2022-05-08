import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popover-relay-duration',
  templateUrl: './popover-relay-duration.component.html',
  styleUrls: ['./popover-relay-duration.component.scss']
})
export class PopoverRelayDurationComponent implements OnInit {

  @Input()
  duration!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onConfirm() {

  }

}
