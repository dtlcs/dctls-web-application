import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ContentService} from "../../services/content.service";
import {SimulatorComponent} from "../../content/junction/simulator/simulator.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @ViewChild('dynamicContent', {
    read: ViewContainerRef
  }) viewContainerRef: ViewContainerRef;

  constructor(private contentService: ContentService) {
    this.contentService = contentService;
  }

  ngOnInit() {
    this.contentService.viewContainerRef = this.viewContainerRef;

    // this.contentService.loadComponent(SimulatorComponent);
  }
}
