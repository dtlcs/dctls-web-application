import { Component, OnInit, ViewChild } from '@angular/core';
import {ContentService} from '../../../services/content.service';
import {DashboardComponent} from '../../administration/dashboard/dashboard.component';
import {MapComponent} from '../../junction/map/map.component';
import {ControlComponent} from '../../junction/control/control.component';
import {VideoFeedComponent} from '../../junction/video-feed/video-feed.component';
import {JunctionProfileComponent} from '../../junction/junction-profile/junction-profile.component';
import {JunctionHistoryComponent} from '../../junction/junction-history/junction-history.component';
import {SimulatorComponent} from '../../junction/simulator/simulator.component';
import {NewUserComponent} from '../../user/new-user/new-user.component';
import {ManageUsersComponent} from '../../user/manage-users/manage-users.component';
import {ServerLogComponent} from '../../administration/server-log/server-log.component';
import {LoginHistoryComponent} from '../../administration/login-history/login-history.component';
import {MatMenuTrigger} from '@angular/material/menu';
import {ManageJunctionsComponent} from '../../junction/manage-junctions/manage-junctions.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild(MatMenuTrigger) junctionOverviewMenuTrigger: MatMenuTrigger;

  public selected = 'control';

  constructor(private contentService: ContentService) {

  }

  ngOnInit() {
  }

  onClickBrand() {
    this.contentService.loadComponent(DashboardComponent);
  }

  onClickJunctionOverview() {
    this.selected = 'Junction Overview';
    this.contentService.loadComponent(MapComponent);
  }

  onClickManageJunctions() {
    this.contentService.loadComponent(ManageJunctionsComponent);
  }

  onClickControl() {
    this.selected = 'Control';
    this.contentService.loadComponent(ControlComponent);
  }

  onClickVideoFeed() {
    this.selected = 'Video Feed';
    this.contentService.loadComponent(VideoFeedComponent);
  }

  onClickJunctionProfile() {
    this.selected = 'Junction Profile';
    this.contentService.loadComponent(JunctionProfileComponent);
  }

  onClickHistory() {
    this.selected = 'History';
    this.contentService.loadComponent(JunctionHistoryComponent);
  }

  onClickSimulator() {
    this.selected = 'Simulator';
    this.contentService.loadComponent(SimulatorComponent);
  }

  onClickNewUser() {
    this.selected = 'New User';
    this.contentService.loadComponent(NewUserComponent);
  }

  onClickManageUsers() {
    this.selected = 'Manage Users';
    this.contentService.loadComponent(ManageUsersComponent);
  }

  onClickServerLog() {
    this.selected = 'Server Log';
    this.contentService.loadComponent(ServerLogComponent);
  }

  onClickLoginHistory() {
    this.selected = 'Login History';
    this.contentService.loadComponent(LoginHistoryComponent);
  }

}
