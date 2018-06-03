import {Component, OnInit} from '@angular/core';
import {Content} from '../../models/content';
import {ControlDrawService} from './services/control-draw.service';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit, Content {
    title = 'Control';

    constructor(private controlDrawService: ControlDrawService) {

    }

    ngOnInit() {
        const canvas: any = document.querySelector('#backgroundCanvasAnchorPane');
        const ctx = canvas.getContext('2d');
        this.controlDrawService.setBackgroundLayout(canvas);
        this.controlDrawService.drawBackground(ctx);
    }

}
