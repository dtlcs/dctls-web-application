import { Component, OnInit } from '@angular/core';
import {Content} from "../../../common/models/content";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, Content {
  title: string = 'Map';

  constructor() { }

  ngOnInit() {
  }

}
