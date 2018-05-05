import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContentService} from './services/content.service';
import {setAppInjector} from './injector';
import {ContentComponent} from './components/content/content.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {LoginHistoryComponent} from './components/login-history/login-history.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {SettingsComponent} from './components/settings/settings.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ServerLogComponent} from './components/server-log/server-log.component';
import {ManageUsersComponent} from './components/manage-users/manage-users.component';
import {NewUserComponent} from './components/new-user/new-user.component';
import {HttpClientModule} from '@angular/common/http';
import {NewUserService} from './components/new-user/new-user.service';
import {ManageUsersService} from './components/manage-users/manage-users.service';
import {AppPreloaderComponent} from './components/app-preloader/app-preloader.component';
import {ContentPreloaderComponent} from './components/content-preloader/content-preloader.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ActivityHistoryComponent} from './components/activity-history/activity-history.component';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {ConsoleComponent} from './components/console/console.component';
import {RouterModule} from '@angular/router';
import {FirebaseAuthService} from "./services/firebase-auth.service";
import {UserService} from "./services/user.service";
import {SimulatorComponent} from "./components/simulator/simulator.component";
import {MapComponent} from "./components/map/map.component";
import {NewJunctionComponent} from "./components/new-junction/new-junction.component";
import {ControlComponent} from "./components/control/control.component";
import {ManageJunctionsComponent} from "./components/manage-junctions/manage-junctions.component";
import {EditJunctionComponent} from "./components/edit-junction/edit-junction.component";
import {VideoFeedComponent} from "./components/video-feed/video-feed.component";
import {JunctionProfileComponent} from "./components/junction-profile/junction-profile.component";
import {JunctionHistoryComponent} from "./components/junction-history/junction-history.component";
import {SessionService} from "./components/simulator/services/session.service";
import {ManageJunctionsService} from "./components/manage-junctions/manage-junctions.service";
import {MapService} from "./components/map/map.service";


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
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot([{path: "", component: AppComponent}])],
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
