import { Component, OnInit } from '@angular/core';
import {Content} from "../../../models/content";
import {User} from "../../../models/user";
import {ManageUsersService} from "./manage-users.service";

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit, Content {
  title: string = 'Manage Users';

  public users: any;

  constructor(private manageUsersService: ManageUsersService) {
    this.users = [];
  }

  ngOnInit() {
    this.manageUsersService.getAllUsersWithRoles()
      .then(res => {
          this.users = res;
      })
      .catch(err => {
        console.log(err);
      });
  }

}
