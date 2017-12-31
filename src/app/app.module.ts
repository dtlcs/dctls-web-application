import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SimulatorComponent} from './simulator/simulator.component';
import {GlobalVarService} from "./global-var.service";


@NgModule({
  declarations: [
    AppComponent,
    SimulatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GlobalVarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
