import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
import { ContentService } from '../../services/content.service';
import { ControlComponent } from '../../content/junction/control/control.component';
import { SimulatorComponent } from '../../content/junction/simulator/simulator.component';
import { JunctionProfileComponent } from '../../content/junction/junction-profile/junction-profile.component';
import { VideoFeedComponent } from '../../content/junction/video-feed/video-feed.component';
import { JunctionHistoryComponent } from '../../content/junction/junction-history/junction-history.component';
import { NewUserComponent } from '../../content/user/new-user/new-user.component';
import { ManageUsersComponent } from '../../content/user/manage-users/manage-users.component';
import { ServerLogComponent } from '../../content/administration/server-log/server-log.component';
import { LoginHistoryComponent } from '../../content/administration/login-history/login-history.component';
import { DashboardComponent } from '../../content/administration/dashboard/dashboard.component';
import { MapComponent } from '../../content/map/map.component';

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

  onClickBrand() {
    this.contentService.loadComponent(DashboardComponent);
  }

  onClickJunctionOverview() {
    this.contentService.loadComponent(MapComponent);
  }

  onClickJunctionOverviewSettings() {
    this.contentService.loadComponent(MapComponent);
  }

  onClickControl() {
    this.contentService.loadComponent(ControlComponent);
  }

  onClickVideoFeed() {
    this.contentService.loadComponent(VideoFeedComponent);
  }

  onClickJunctionProfile() {
    this.contentService.loadComponent(JunctionProfileComponent);
  }

  onClickHistory() {
    this.contentService.loadComponent(JunctionHistoryComponent);
  }

  onClickSimulator() {
    this.contentService.loadComponent(SimulatorComponent);
  }

  onClickNewUser() {
    this.contentService.loadComponent(NewUserComponent);
  }

  onClickManageUsers() {
    this.contentService.loadComponent(ManageUsersComponent);
  }

  onClickServerLog() {
    this.contentService.loadComponent(ServerLogComponent);
  }

  onClickLoginHistory() {
    this.contentService.loadComponent(LoginHistoryComponent);
  }

}
