import { MatMenuTrigger } from '@angular/material/menu';
import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ContentService} from '../../../services/content.service';
import {FirebaseAuthService} from "../../../services/firebase-auth.service";
import {EditProfileComponent} from "../../user/edit-profile/edit-profile.component";
import {Router} from "@angular/router";
import {AngularFireDatabase} from "angularfire2/database";
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public contentTitle: string;
  public selectedJunction = 'Smart Traffic Light System';

  @ViewChild(MatMenuTrigger) profileMenuTrigger: MatMenuTrigger;

  constructor(private contentService: ContentService, public firebaseAuthService: FirebaseAuthService, private angularFireDatabase: AngularFireDatabase, private router: Router) {
    this.contentService.changeContentTitle = (title: string): void => {
      this.contentTitle = title;
    };
  }

  ngOnInit() {
  }

  onClickActivitiesButton(){

  }

  onClickPermissionButton(){

  }

  onClickMyAccount(){
    this.contentService.loadComponent(EditProfileComponent);
  }

  onClickSignOutButton(){
    this.angularFireDatabase.list(`/users/${this.firebaseAuthService.currentUserId}/activities/${moment().utc().format("YYYY-MM-DD")}`)
      .push({ [moment().format()] : 'signout' });
    this.firebaseAuthService.signOut();
    this.router.navigate(['/']);
  }

}
