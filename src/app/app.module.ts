import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SimulatorComponent} from './components/simulator/simulator.component';
import {SessionService} from "./services/session.service";
import {setAppInjector} from "./common/injector";
import { MapComponent } from './components/map/map.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ControlComponent } from './components/control/control.component';
import { NewJunctionComponent } from './components/new-junction/new-junction.component';
import { ManageJunctionsComponent } from './components/manage-junctions/manage-junctions.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ServerLogComponent } from './components/server-log/server-log.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { HeaderComponent } from './components/header/header.component';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
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
