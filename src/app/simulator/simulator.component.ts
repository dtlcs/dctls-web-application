import { Component, OnInit } from '@angular/core';
import {GlobalVarService} from "../global-var.service";

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  constructor(public globals: GlobalVarService) {
    window.onload = function () {
      var canvas: any = document.querySelector('#backgroundCanvasAnchorPane');
      // var width = canvas.width = window.innerWidth;
      // var height = canvas.height = window.innerHeight;

      var ctx = canvas.getContext('2d');


      // Road surface
      ctx.fillStyle = 'rgb(46,52,54)';
      ctx.fillRect(globals.ROAD_LENGTH, 0, globals.ROAD_RADIUS * 2, globals.CANVAS_RADIUS * 2);
      ctx.fillRect(0, globals.ROAD_LENGTH, globals.CANVAS_RADIUS * 2, globals.ROAD_RADIUS * 2);

      // Boundary lines
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgb(0, 0, 0)';
      ctx.beginPath();
      ctx.lineTo(globals.CANVAS_RADIUS + globals.ROAD_RADIUS, 0.0);
      ctx.lineTo(globals.CANVAS_RADIUS + globals.ROAD_RADIUS, globals.ROAD_LENGTH);
      ctx.lineTo(2 * globals.CANVAS_RADIUS, globals.ROAD_LENGTH);
      ctx.lineTo(2 * globals.CANVAS_RADIUS, globals.CANVAS_RADIUS + globals.ROAD_RADIUS);
      ctx.lineTo(globals.CANVAS_RADIUS + globals.ROAD_RADIUS, globals.CANVAS_RADIUS + globals.ROAD_RADIUS);
      ctx.lineTo(globals.CANVAS_RADIUS + globals.ROAD_RADIUS, 2 * globals.CANVAS_RADIUS);
      ctx.lineTo(globals.ROAD_LENGTH, 2 * globals.CANVAS_RADIUS);
      ctx.lineTo(globals.ROAD_LENGTH, globals.CANVAS_RADIUS + globals.ROAD_RADIUS);
      ctx.lineTo(0.0, globals.CANVAS_RADIUS + globals.ROAD_RADIUS);
      ctx.lineTo(0.0, globals.ROAD_LENGTH);
      ctx.lineTo(globals.ROAD_LENGTH, globals.ROAD_LENGTH);
      ctx.lineTo(globals.ROAD_LENGTH, 0.0);
      ctx.stroke();

      // Mid lines
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgb(219,219,217)';
      ctx.beginPath();
      ctx.moveTo(globals.CANVAS_RADIUS, 0);
      ctx.lineTo(globals.CANVAS_RADIUS, 2 * globals.CANVAS_RADIUS);
      ctx.moveTo(0, globals.CANVAS_RADIUS);
      ctx.lineTo(2 * globals.CANVAS_RADIUS, globals.CANVAS_RADIUS);
      ctx.stroke();

      // Mark intersection bounds
      ctx.beginPath();
      // Left
      ctx.moveTo(globals.ROAD_LENGTH,globals. ROAD_LENGTH);
      ctx.lineTo(globals.ROAD_LENGTH, globals.CANVAS_RADIUS + globals.ROAD_RADIUS);
      // Right
      ctx.moveTo(globals.CANVAS_RADIUS + globals.ROAD_RADIUS, globals.ROAD_LENGTH);
      ctx.lineTo(globals.CANVAS_RADIUS + globals.ROAD_RADIUS, globals.CANVAS_RADIUS + globals.ROAD_RADIUS);
      // Top
      ctx.moveTo(globals.ROAD_LENGTH, globals.ROAD_LENGTH);
      ctx.lineTo(globals.CANVAS_RADIUS + globals.ROAD_RADIUS, globals.ROAD_LENGTH);
      // Bottom
      ctx.moveTo(globals.ROAD_LENGTH, globals.CANVAS_RADIUS + globals.ROAD_RADIUS);
      ctx.lineTo(globals.CANVAS_RADIUS + globals.ROAD_RADIUS, globals.CANVAS_RADIUS + globals.ROAD_RADIUS);
      ctx.stroke();

      // Mark lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgb(219,219,217)';
      ctx.setLineDash([5, 12]);
      ctx.beginPath();
      // Left mid vertical 1
      ctx.moveTo(globals.CANVAS_RADIUS - globals.ROAD_RADIUS / 3, 0);
      ctx.lineTo(globals.CANVAS_RADIUS - globals.ROAD_RADIUS / 3, 2 * globals.CANVAS_RADIUS);
      // Left mid vertical 2
      ctx.moveTo(globals.CANVAS_RADIUS - globals.ROAD_RADIUS / 3 * 2, 0);
      ctx.lineTo(globals.CANVAS_RADIUS - globals.ROAD_RADIUS / 3 * 2, 2 * globals.CANVAS_RADIUS);
      // Right mid vertical 1
      ctx.moveTo(globals.CANVAS_RADIUS + globals.ROAD_RADIUS / 3, 0);
      ctx.lineTo(globals.CANVAS_RADIUS + globals.ROAD_RADIUS / 3, 2 * globals.CANVAS_RADIUS);
      // Right mid vertical 2
      ctx.moveTo(globals.CANVAS_RADIUS + globals.ROAD_RADIUS / 3 * 2, 0);
      ctx.lineTo(globals.CANVAS_RADIUS + globals.ROAD_RADIUS / 3 * 2, 2 * globals.CANVAS_RADIUS);
      // Top mid horizontal 1
      ctx.moveTo(0, globals.CANVAS_RADIUS - globals.ROAD_RADIUS / 3);
      ctx.lineTo(2 * globals.CANVAS_RADIUS, globals.CANVAS_RADIUS - globals.ROAD_RADIUS / 3);
      // Top mid horizontal 2
      ctx.moveTo(0, globals.CANVAS_RADIUS - globals.ROAD_RADIUS / 3 * 2);
      ctx.lineTo(2 * globals.CANVAS_RADIUS, globals.CANVAS_RADIUS - globals.ROAD_RADIUS / 3 * 2);
      // Down mid horizontal 1
      ctx.moveTo(0, globals.CANVAS_RADIUS + globals.ROAD_RADIUS / 3);
      ctx.lineTo(2 * globals.CANVAS_RADIUS, globals.CANVAS_RADIUS + globals.ROAD_RADIUS / 3);
      // Down mid horizontal 2
      ctx.moveTo(0, globals.CANVAS_RADIUS + globals.ROAD_RADIUS / 3 * 2);
      ctx.lineTo(2 * globals.CANVAS_RADIUS, globals.CANVAS_RADIUS + globals.ROAD_RADIUS / 3 * 2);
      ctx.stroke();
    }
  }

  ngOnInit() {

  }

}
