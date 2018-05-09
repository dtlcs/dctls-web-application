import {Component, OnInit} from '@angular/core';
import {NewUserService} from './new-user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Content} from '../../models/content';
import {DEFAULT_NEW_USER_PASSWORD} from './new-user.constants';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit, Content {
  title = 'New User';

  public newUserForm: FormGroup;
  public roles: any;

  constructor(private formBuilder: FormBuilder, private newUserService: NewUserService) {
    newUserService.getAllRoles()
      .then(res => {
        this.roles = res;
      })
      .catch(err => {
        console.log(err);
      });

    this.newUserForm = formBuilder.group({
      name: new FormControl('', [
        Validators.required
      ]),
      nic: new FormControl('', [
        Validators.required,
        Validators.pattern('\\d{9}[v|V]')
      ]),
      role: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('\\d{10}')
      ]),
      address: this.formBuilder.group({
        street: new FormControl('', [
          Validators.required
        ]),
        city: new FormControl('', [
          Validators.required
        ]),
        province: new FormControl('', [
          Validators.required
        ]),
        postalCode: new FormControl('', [
          Validators.required,
          Validators.pattern('\\d{5}')
        ])
      })
    });
  }

  ngOnInit() {
  }

  submitNewUser(user) {
    console.log(user);
    user['role_id'] = user.role;
    // delete user['role'];
    user['password'] = DEFAULT_NEW_USER_PASSWORD;
    user['street'] = user.address.street;
    user['city'] = user.address.city;
    user['province'] = user.address.province;
    user['postal_code'] = user.address.postalCode;
    // delete user['address'];

    this.newUserService.submitNewUser(user)
      .subscribe(res => {
          console.log('New user successfully added');
          this.newUserForm.reset();
        },
        err => {
          console.log(err);
        });
  }

}
