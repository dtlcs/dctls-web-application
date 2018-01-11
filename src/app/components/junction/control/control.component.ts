import { Component, OnInit } from '@angular/core';
import {Content} from "../../../common/models/content";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit, Content {
  title: string = 'Control';

  constructor() { }

  ngOnInit() {
  }

}
