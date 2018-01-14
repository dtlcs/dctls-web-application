import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FirebaseAuthService} from "../../../services/firebase-auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  isAuthChecked = false;

  email = '';
  password = '';

  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };

  constructor(public firebaseAuthService: FirebaseAuthService, private router: Router) {

  }

  ngOnInit() {
  }

  checkUserInfo() {
    if (this.firebaseAuthService.isUserEmailLoggedIn) {
      this.router.navigate(['/console'])
    }
    this.isAuthChecked = true;
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  onLoginEmail(): void {
    this.clearErrorMessage()

    if (this.validateForm(this.email, this.password)) {
      this.firebaseAuthService.signInWithEmail(this.email, this.password)
        .then(() => this.router.navigate(['/user']))
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
