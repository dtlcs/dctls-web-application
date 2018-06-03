import {Component, OnInit} from '@angular/core';
import {Content} from '../../models/content';

@Component({
    selector: 'app-server-log',
    templateUrl: './server-log.component.html',
    styleUrls: ['./server-log.component.scss']
})
export class ServerLogComponent implements OnInit, Content {
    title = 'Server Log';

    constructor() {
    }

    ngOnInit() {
    }

}
