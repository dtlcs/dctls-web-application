import { Component, OnInit } from '@angular/core';
import {Content} from "../../../common/models/content";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, Content {
  title: string = 'Dashboard';

  constructor() { }

  ngOnInit() {
  }

}
