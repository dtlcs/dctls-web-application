import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {FirebaseAuthService} from "../../../services/firebase-auth.service";
import * as moment from 'moment';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  constructor(public firebaseAuthService: FirebaseAuthService, private angularFireDatabase: AngularFireDatabase) {

  }

  ngOnInit() {
  }

}
