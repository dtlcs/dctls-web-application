import {Component, OnInit} from '@angular/core';
import {Content} from '../../models/content';

@Component({
    selector: 'app-login-history',
    templateUrl: './login-history.component.html',
    styleUrls: ['./login-history.component.scss']
})
export class LoginHistoryComponent implements OnInit, Content {
    title = 'Login History';

    constructor() {
    }

    ngOnInit() {
    }

}
