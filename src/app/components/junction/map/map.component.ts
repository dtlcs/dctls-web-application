import { Component, OnInit } from '@angular/core';
import {Content} from "../../../common/models/content";
import {MAP_STYLE} from "./map.style";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, Content {
  title: string = 'Map';

  public lat: number = 6.844001;
  public lng: number = 79.940726;

  public styles = MAP_STYLE;

  constructor() { }

  ngOnInit() {
  }

}
