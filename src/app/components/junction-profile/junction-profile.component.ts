import {Component, OnInit} from '@angular/core';
import {Content} from '../../models/content';

@Component({
  selector: 'app-junction-profile',
  templateUrl: './junction-profile.component.html',
  styleUrls: ['./junction-profile.component.scss']
})
export class JunctionProfileComponent implements OnInit, Content {
  title = 'Junction Profile';

  constructor() {
  }

  ngOnInit() {
  }

}
