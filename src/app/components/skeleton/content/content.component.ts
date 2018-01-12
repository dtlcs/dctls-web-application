import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ContentService} from "../../../common/services/content.service";

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

    // this.contentService.loadComponent(SimulatorComponent);
  }
}
