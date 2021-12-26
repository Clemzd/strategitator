import {Component, Input, OnInit} from '@angular/core';
import {Relay} from "@models/relay.model";

@Component({
  selector: 'app-relay',
  templateUrl: './relay.component.html',
  styleUrls: ['./relay.component.scss']
})
export class RelayComponent implements OnInit {

  @Input() relay!: Relay;

  constructor() {
  }

  ngOnInit(): void {
  }

}
