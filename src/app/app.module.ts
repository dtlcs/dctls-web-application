import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContentService} from './services/content.service';
import {setAppInjector} from './injector';
import {SimulatorComponent} from './components/junction/simulator/simulator.component';
import {JunctionHistoryComponent} from './components/junction/junction-history/junction-history.component';
import {JunctionProfileComponent} from './components/junction/junction-profile/junction-profile.component';
import {VideoFeedComponent} from './components/junction/video-feed/video-feed.component';
import {ContentComponent} from './components/skeleton/content/content.component';
import {EditJunctionComponent} from './components/junction/edit-junction/edit-junction.component';
import {EditUserComponent} from './components/user/edit-user/edit-user.component';
import {NotificationsComponent} from './components/skeleton/notifications/notifications.component';
import {LoginHistoryComponent} from './components/administration/login-history/login-history.component';
import {EditProfileComponent} from './components/user/edit-profile/edit-profile.component';
import {SettingsComponent} from './components/administration/settings/settings.component';
import {ForgotPasswordComponent} from './components/skeleton/forgot-password/forgot-password.component';
import {SignInComponent} from './components/skeleton/sign-in/sign-in.component';
import {HeaderComponent} from './components/skeleton/header/header.component';
import {SidebarComponent} from './components/skeleton/sidebar/sidebar.component';
import {DashboardComponent} from './components/administration/dashboard/dashboard.component';
import {ServerLogComponent} from './components/administration/server-log/server-log.component';
import {ManageUsersComponent} from './components/user/manage-users/manage-users.component';
import {ManageJunctionsComponent} from './components/junction/manage-junctions/manage-junctions.component';
import {NewJunctionComponent} from './components/junction/new-junction/new-junction.component';
import {ControlComponent} from './components/junction/control/control.component';
import {NewUserComponent} from './components/user/new-user/new-user.component';
import {MapComponent} from './components/junction/map/map.component';
import {SessionService} from './components/junction/simulator/services/session.service';
import {HttpClientModule} from '@angular/common/http';
import {NewUserService} from './components/user/new-user/new-user.service';
import {ManageUsersService} from './components/user/manage-users/manage-users.service';
import {AppPreloaderComponent} from './components/skeleton/app-preloader/app-preloader.component';
import {ContentPreloaderComponent} from './components/skeleton/content-preloader/content-preloader.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ActivityHistoryComponent} from './components/administration/activity-history/activity-history.component';
import {ManageJunctionsService} from './components/junction/manage-junctions/manage-junctions.service';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../environments/environment';
import {MapService} from "./components/junction/map/map.service";
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { ConsoleComponent } from './components/skeleton/console/console.component';
import { RouterModule, Routes } from '@angular/router';
import {FirebaseAuthService} from "./services/firebase-auth.service";
import {UserService} from "./services/user.service";


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
    HeaderComponent,
    SignInComponent,
    ForgotPasswordComponent,
    SettingsComponent,
    EditProfileComponent,
    LoginHistoryComponent,
    NotificationsComponent,
    EditUserComponent,
    EditJunctionComponent,
    ContentComponent,
    VideoFeedComponent,
    JunctionProfileComponent,
    JunctionHistoryComponent,
    AppPreloaderComponent,
    ContentPreloaderComponent,
    ActivityHistoryComponent,
    ConsoleComponent,
  ],
  entryComponents: [
    ConsoleComponent,
    SignInComponent,
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
    ManageJunctionsComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot([{ path: "", component: AppComponent}])],
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey,
      libraries: ['places']
    }),

    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    SessionService,
    ContentService,
    NewUserService,
    ManageUsersService,
    ManageJunctionsService,
    MapService,
    FirebaseAuthService,
    UserService,
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(injector: Injector) {
    setAppInjector(injector);
  }
}
