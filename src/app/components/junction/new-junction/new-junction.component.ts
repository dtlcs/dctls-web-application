import { Component, OnInit } from '@angular/core';
import {Content} from "../../../models/content";

@Component({
  selector: 'app-new-junction',
  templateUrl: './new-junction.component.html',
  styleUrls: ['./new-junction.component.scss']
})
export class NewJunctionComponent implements OnInit, Content {
  title: string = 'New Junction';

  constructor() { }

  ngOnInit() {
  }

}
