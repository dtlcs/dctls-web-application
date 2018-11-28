import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {Content} from '../../../models/content';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit, Content {
    title = 'Control';

    public junctionObservable: AngularFireObject<any>;
    public junction = {
        controlMode: 'automatic',

        northLane1: 'off',
        northLane2: 'off',
        northLane3: 'off',

        eastLane1: 'off',
        eastLane2: 'off',
        eastLane3: 'off',

        southLane1: 'off',
        southLane2: 'off',
        southLane3: 'off',

        westLane1: 'off',
        westLane2: 'off',
        westLane3: 'off'
    };

    constructor(private angularFireDatabase: AngularFireDatabase) {
        // this.angularFireDatabase.object('/junctions/junction_name').update(this.junction);

        this.junctionObservable = this.angularFireDatabase.object('junctions/junction_name');

        this.junctionObservable.valueChanges().subscribe(value => {
            this.junction = value;
        });
    }

    ngOnInit() {
    }

    onChangeJunctionModel() {
        this.junctionObservable.update(this.junction);
    }

}
