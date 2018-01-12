import { Component, OnInit } from '@angular/core';
import {Content} from "../../../common/models/content";
import {ManageJunctionsService} from "./manage-junctions.service";

@Component({
  selector: 'app-manage-junctions',
  templateUrl: './manage-junctions.component.html',
  styleUrls: ['./manage-junctions.component.scss']
})
export class ManageJunctionsComponent implements OnInit, Content {
  title: string = 'Manage Junctions';

  public junctions: any;

  constructor(private manageJunctionsService: ManageJunctionsService) {
    this.junctions = [];
  }

  ngOnInit() {
    this.manageJunctionsService.getAllJunctions()
      .then(res => {
        this.junctions = res;
      })
      .catch(err => {
        console.log(err);
      });
  }

}
