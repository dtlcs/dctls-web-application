import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {FirebaseAuthService} from '../../services/firebase-auth.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  constructor(private firebaseAuthService: FirebaseAuthService, private angularFireDatabase: AngularFireDatabase) {

  }

  ngOnInit() {
  }

}
