import { Component, OnInit } from '@angular/core';
import {Content} from "../../../models/content";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, Content {
  title: string = 'Edit User';

  constructor() { }

  ngOnInit() {
  }

}
