import { MatMenuTrigger } from '@angular/material/menu';
import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ContentService} from '../../../services/content.service';
import {FirebaseAuthService} from "../../../services/firebase-auth.service";
import {DashboardComponent} from "../../administration/dashboard/dashboard.component";
import {EditProfileComponent} from "../../user/edit-profile/edit-profile.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public contentTitle: string;

  @ViewChild(MatMenuTrigger) profileMenuTrigger: MatMenuTrigger;

  constructor(private contentService: ContentService, private firebaseAuthService: FirebaseAuthService, private router: Router) {
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
    this.firebaseAuthService.signOut();
    this.router.navigate(['/']);
  }

}
