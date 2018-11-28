import {Component, OnInit} from '@angular/core';
import {Content} from '../../models/content';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit, Content {
    title = 'Edit Profile';

    constructor() {
    }

    ngOnInit() {
    }

}
