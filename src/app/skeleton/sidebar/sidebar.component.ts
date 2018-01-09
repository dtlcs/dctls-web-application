import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
import {ContentService} from "../../services/content.service";
import {ControlComponent} from "../../content/junction/control/control.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private contentService: ContentService) {
    this.contentService = contentService;
  }

  ngOnInit() {
  }

  onClickControl(){
    this.contentService.loadComponent(ControlComponent);
  }

}
