import { Component, OnInit } from '@angular/core';
import {Content} from "../../../common/models/content";

@Component({
  selector: 'app-junction-history',
  templateUrl: './junction-history.component.html',
  styleUrls: ['./junction-history.component.css']
})
export class JunctionHistoryComponent implements OnInit, Content {
  title: string = 'Junction History';

  constructor() { }

  ngOnInit() {
  }

}
