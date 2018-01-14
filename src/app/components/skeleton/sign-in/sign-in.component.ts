import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FirebaseAuthService} from "../../../services/firebase-auth.service";
import {AngularFireDatabase} from "angularfire2/database";
import * as moment from 'moment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  email = '';
  password = '';

  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };

  constructor(public firebaseAuthService: FirebaseAuthService, private angularFireDatabase: AngularFireDatabase, private router: Router) {

  }

  ngOnInit() {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  onLoginEmail(): void {
    this.clearErrorMessage()

    if (this.validateForm(this.email, this.password)) {
      this.firebaseAuthService.signInWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/']);
          this.angularFireDatabase.list('/users/' + this.firebaseAuthService.currentUserId + '/sessions').push({ signin: moment().format() });
        })
        .catch(_error => {
          this.error = _error;
          this.router.navigate(['/']);
        })
    }
  }

  validateForm(email: string, password: string): boolean {
    if (email.length === 0) {
      this.errorMessage = 'Please enter the Email!';
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = 'Please enter the Password!';
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = 'Password should be at least 6 characters!';
      return false;
    }

    this.errorMessage = '';

    return true
  }

  isValidMailFormat(email: string) {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if ((email.length === 0) && (!EMAIL_REGEXP.test(email))) {
      return false;
    }

    return true;
  }
}
