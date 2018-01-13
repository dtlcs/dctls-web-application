import {Routes} from '@angular/router';

import {SignInComponent} from "./components/skeleton/sign-in/sign-in.component";
import {ConsoleComponent} from "./components/console/console.component";

export const routes: Routes = [
  // {path: '', redirectTo: 'console', pathMatch: 'full'},
  {path: '', component: ConsoleComponent, data:{requiresSignIn: true}},
  {path: 'signin', component: SignInComponent, data:{requiresSignIn: false}},
];
