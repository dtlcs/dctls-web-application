import {Component, OnInit} from '@angular/core';
import {Content} from '../../models/content';

@Component({
    selector: 'app-video-feed',
    templateUrl: './video-feed.component.html',
    styleUrls: ['./video-feed.component.scss']
})
export class VideoFeedComponent implements OnInit, Content {
    title = 'Video Feed';

    constructor() {
    }

    ngOnInit() {
    }

}
