import { Component, OnInit } from '@angular/core';
import {Content} from "../../../common/models/content";

@Component({
  selector: 'app-manage-junctions',
  templateUrl: './manage-junctions.component.html',
  styleUrls: ['./manage-junctions.component.scss']
})
export class ManageJunctionsComponent implements OnInit, Content {
  title: string = 'Manage Junctions';

  constructor() { }

  ngOnInit() {
  }

}
