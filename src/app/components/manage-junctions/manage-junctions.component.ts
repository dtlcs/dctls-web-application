import {Component, OnInit} from '@angular/core';
import {ManageJunctionsService} from './manage-junctions.service';
import {Content} from '../../models/content';

@Component({
    selector: 'app-manage-junctions',
    templateUrl: './manage-junctions.component.html',
    styleUrls: ['./manage-junctions.component.scss']
})
export class ManageJunctionsComponent implements OnInit, Content {
    title = 'Manage Junctions';

    public junctions: any;

    constructor(private manageJunctionsService: ManageJunctionsService) {
        this.junctions = [];
    }

    ngOnInit() {
        this.manageJunctionsService.getAllJunctions()
            .then(res => {
                this.junctions = res;
            })
            .catch(err => {
                console.log(err);
            });
    }

}
