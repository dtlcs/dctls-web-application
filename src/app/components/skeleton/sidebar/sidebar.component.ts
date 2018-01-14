import { Component, OnInit, ViewChild } from '@angular/core';
import {ContentService} from "../../../services/content.service";
import {DashboardComponent} from "../../administration/dashboard/dashboard.component";
import {MapComponent} from "../../junction/map/map.component";
import {ControlComponent} from "../../junction/control/control.component";
import {VideoFeedComponent} from "../../junction/video-feed/video-feed.component";
import {JunctionProfileComponent} from "../../junction/junction-profile/junction-profile.component";
import {JunctionHistoryComponent} from "../../junction/junction-history/junction-history.component";
import {SimulatorComponent} from "../../junction/simulator/simulator.component";
import {NewUserComponent} from "../../user/new-user/new-user.component";
import {ManageUsersComponent} from "../../user/manage-users/manage-users.component";
import {ServerLogComponent} from "../../administration/server-log/server-log.component";
import {LoginHistoryComponent} from "../../administration/login-history/login-history.component";
import {MatMenuTrigger} from "@angular/material/menu";
import {ManageJunctionsComponent} from "../../junction/manage-junctions/manage-junctions.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild(MatMenuTrigger) junctionOverviewMenuTrigger: MatMenuTrigger;

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

  onClickManageJunctions() {
    this.contentService.loadComponent(ManageJunctionsComponent);
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
