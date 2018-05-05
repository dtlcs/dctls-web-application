import {Component, OnInit} from '@angular/core';
import {Content} from "../../models/content";

@Component({
  selector: 'app-edit-junction',
  templateUrl: './edit-junction.component.html',
  styleUrls: ['./edit-junction.component.scss']
})
export class EditJunctionComponent implements OnInit, Content {
  title: string = 'Edit Junction';

  constructor() {
  }

  ngOnInit() {
  }

}
