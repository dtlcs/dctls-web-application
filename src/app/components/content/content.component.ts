import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {MapComponent} from '../map/map.component';
import {ControlComponent} from 'app/components/control/control.component';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    @ViewChild('dynamicContent', {
        read: ViewContainerRef
    }) contentViewContainerRef: ViewContainerRef;

    constructor(private contentService: ContentService) {
        this.contentService = contentService;
    }

    ngOnInit() {
        this.contentService.contentViewContainerRef = this.contentViewContainerRef;

        // Load default
        this.contentService.loadComponent(ControlComponent);
    }
}
