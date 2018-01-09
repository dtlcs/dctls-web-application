import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JunctionProfileComponent} from "./content/junction/junction-profile/junction-profile.component";
import {VideoFeedComponent} from "./content/junction/video-feed/video-feed.component";
import {ContentComponent} from "./skeleton/content/content.component";
import {EditJunctionComponent} from "./content/junction/edit-junction/edit-junction.component";
import {EditUserComponent} from "./content/user/edit-user/edit-user.component";
import {NotificationsComponent} from "./skeleton/notifications/notifications.component";
import {LoginHistoryComponent} from "./content/history/login-history/login-history.component";
import {OverviewComponent} from "./content/junction/overview/overview.component";
import {JunctionPopupComponent} from "./content/junction/junction-popup/junction-popup.component";
import {EditProfileComponent} from "./content/user/edit-profile/edit-profile.component";
import {SettingsComponent} from "./content/administration/settings/settings.component";
import {ForgotPasswordComponent} from "./skeleton/login/forgot-password/forgot-password.component";
import {SignInComponent} from "./skeleton/login/sign-in/sign-in.component";
import {HeaderComponent} from "./skeleton/header/header.component";
import {PreloaderComponent} from "./skeleton/preloader/preloader.component";
import {SidebarComponent} from "./skeleton/sidebar/sidebar.component";
import {DashboardComponent} from "./content/administration/dashboard/dashboard.component";
import {ServerLogComponent} from "./content/server/server-log/server-log.component";
import {ManageUsersComponent} from "./content/user/manage-users/manage-users.component";
import {ManageJunctionsComponent} from "./content/junction/manage-junctions/manage-junctions.component";
import {NewJunctionComponent} from "./content/junction/new-junction/new-junction.component";
import {ControlComponent} from "./content/junction/control/control.component";
import {NewUserComponent} from "./content/user/new-user/new-user.component";
import {MapComponent} from "./content/map/map.component";
import {SimulatorComponent} from "./content/junction/simulator/simulator.component";
import {SessionService} from "./content/junction/simulator/services/session.service";
import {ContentService} from "./services/content.service";
import {setAppInjector} from "./common/injector";

@NgModule({
  declarations: [
    AppComponent,
    SimulatorComponent,
    MapComponent,
    NewUserComponent,
    ControlComponent,
    NewJunctionComponent,
    ManageJunctionsComponent,
    ManageUsersComponent,
    ServerLogComponent,
    DashboardComponent,
    SidebarComponent,
    PreloaderComponent,
    HeaderComponent,
    SignInComponent,
    ForgotPasswordComponent,
    SettingsComponent,
    EditProfileComponent,
    JunctionPopupComponent,
    OverviewComponent,
    LoginHistoryComponent,
    NotificationsComponent,
    EditUserComponent,
    EditJunctionComponent,
    ContentComponent,
    VideoFeedComponent,
    JunctionProfileComponent,
  ],
  entryComponents: [
    ControlComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    SessionService,
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    setAppInjector(injector);
  }
}
