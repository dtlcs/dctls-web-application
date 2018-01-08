import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SimulatorComponent} from './components/junction/simulator/simulator.component';
import {SessionService} from "./services/session.service";
import {setAppInjector} from "./common/injector";
import { MapComponent } from './components/map/map.component';
import { NewUserComponent } from './components/user/new-user/new-user.component';
import { ControlComponent } from './components/junction/control/control.component';
import { NewJunctionComponent } from './components/junction/new-junction/new-junction.component';
import { ManageJunctionsComponent } from './components/junction/manage-junctions/manage-junctions.component';
import { ManageUsersComponent } from './components/user/manage-users/manage-users.component';
import { ServerLogComponent } from './components/server/server-log/server-log.component';
import { DashboardComponent } from './components/administration/dashboard/dashboard.component';
import { SidebarComponent } from './components/skeleton/sidebar/sidebar.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { HeaderComponent } from './components/skeleton/header/header.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { SettingsComponent } from './components/administration/settings/settings.component';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import { JunctionPopupComponent } from './components/junction/junction-popup/junction-popup.component';
import { OverviewComponent } from './components/junction/overview/overview.component';
import { LoginHistoryComponent } from './components/history/login-history/login-history.component';
import { NotificationsComponent } from './components/skeleton/notifications/notifications.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { EditJunctionComponent } from './components/junction/edit-junction/edit-junction.component';
import { ContentComponent } from './components/skeleton/content/content.component';
import { VideoFeedComponent } from './components/junction/video-feed/video-feed.component';
import {ReactiveFormsModule} from "@angular/forms";

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
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    setAppInjector(injector);
  }
}
