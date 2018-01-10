import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContentService} from './common/services/content.service';
import {setAppInjector} from './common/injector';
import {SimulatorComponent} from "./components/junction/simulator/simulator.component";
import {JunctionHistoryComponent} from "./components/junction/junction-history/junction-history.component";
import {JunctionProfileComponent} from "./components/junction/junction-profile/junction-profile.component";
import {VideoFeedComponent} from "./components/junction/video-feed/video-feed.component";
import {ContentComponent} from "./components/skeleton/content/content.component";
import {EditJunctionComponent} from "./components/junction/edit-junction/edit-junction.component";
import {EditUserComponent} from "./components/user/edit-user/edit-user.component";
import {NotificationsComponent} from "./components/skeleton/notifications/notifications.component";
import {LoginHistoryComponent} from "./components/administration/login-history/login-history.component";
import {JunctionPopupComponent} from "./components/junction/map/junction-popup/junction-popup.component";
import {EditProfileComponent} from "./components/user/edit-profile/edit-profile.component";
import {SettingsComponent} from "./components/administration/settings/settings.component";
import {ForgotPasswordComponent} from "./components/skeleton/login/forgot-password/forgot-password.component";
import {SignInComponent} from "./components/skeleton/login/sign-in/sign-in.component";
import {HeaderComponent} from "./components/skeleton/header/header.component";
import {PreloaderComponent} from "./components/skeleton/preloader/preloader.component";
import {SidebarComponent} from "./components/skeleton/sidebar/sidebar.component";
import {DashboardComponent} from "./components/administration/dashboard/dashboard.component";
import {ServerLogComponent} from "./components/administration/server-log/server-log.component";
import {ManageUsersComponent} from "./components/user/manage-users/manage-users.component";
import {ManageJunctionsComponent} from "./components/junction/manage-junctions/manage-junctions.component";
import {NewJunctionComponent} from "./components/junction/new-junction/new-junction.component";
import {ControlComponent} from "./components/junction/control/control.component";
import {NewUserComponent} from "./components/user/new-user/new-user.component";
import {MapComponent} from "./components/junction/map/map.component";
import {SessionService} from "./components/junction/simulator/services/session.service";

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
    LoginHistoryComponent,
    NotificationsComponent,
    EditUserComponent,
    EditJunctionComponent,
    ContentComponent,
    VideoFeedComponent,
    JunctionProfileComponent,
    JunctionHistoryComponent,
  ],
  entryComponents: [
    DashboardComponent,
    MapComponent,
    ControlComponent,
    VideoFeedComponent,
    JunctionProfileComponent,
    JunctionHistoryComponent,
    SimulatorComponent,
    NewUserComponent,
    ManageUsersComponent,
    ServerLogComponent,
    LoginHistoryComponent,
  ],
  imports: [
    BrowserModule,
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
