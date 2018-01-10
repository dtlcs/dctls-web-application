import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  public roles = ['cat', 'bat', 'bar', 'people'];

  constructor() {
  }

  ngOnInit() {
  }

  submitNewUser(form){
    console.log(form);
  }

}
