import { Component, OnInit } from '@angular/core';
import {Content} from "../../../models/content";
import {ManageUsersService} from "../manage-users/manage-users.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, Content {
  title: string = 'Edit User';

  constructor(private manageUsersService: ManageUsersService) {
    // This is how you get the user
    manageUsersService.selectedUser.subscribe(message => console.log(message));
  }

  ngOnInit() {
  }

}
