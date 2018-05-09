import {Component, OnInit} from '@angular/core';
import {ManageUsersService} from './manage-users.service';
import {EditUserComponent} from '../edit-user/edit-user.component';
import {ContentService} from '../../services/content.service';
import {Content} from '../../models/content';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit, Content {
  title = 'Manage Users';

  public users: any;

  constructor(private manageUsersService: ManageUsersService, private contentService: ContentService) {
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

  setSelectedUser(i: number) {
    this.manageUsersService.changeSelectedUser(this.users[i]);
    this.contentService.loadComponent(EditUserComponent);
  }

}
