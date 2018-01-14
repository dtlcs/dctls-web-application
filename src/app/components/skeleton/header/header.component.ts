import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ContentService} from "../../../services/content.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public contentTitle: string;

  constructor(private contentService: ContentService) {
    this.contentService.changeContentTitle = (title: string) : void => {
      this.contentTitle = title;
    }
  }

  ngOnInit() {
  }

}
