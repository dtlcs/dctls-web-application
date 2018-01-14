import { Component } from '@angular/core';
import {FirebaseAuthService} from "./services/firebase-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public firebaseAuthService: FirebaseAuthService) {
  }

  isAuthenticated(){
    return this.firebaseAuthService.authState !== null;
  }
}
