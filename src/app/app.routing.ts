import {Routes} from '@angular/router';

import {ConsoleComponent} from "./components/console/console.component";

export const routes: Routes = [
  // {path: '', redirectTo: 'console', pathMatch: 'full'},
  {
    path: '',
    component: ConsoleComponent
  }
];
