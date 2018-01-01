import {Component, OnInit} from '@angular/core';
import {CANVAS_LENGTH, CANVAS_RADIUS, ROAD_LENGTH, ROAD_RADIUS} from "../globals";

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  constructor() {
    window.onload = function () {
      var canvas: any = document.querySelector('#backgroundCanvasAnchorPane');
      canvas.width = CANVAS_LENGTH;
      canvas.height = CANVAS_LENGTH;

      var ctx = canvas.getContext('2d');

      // Road surface
      ctx.fillStyle = 'rgb(46,52,54)';
      ctx.fillRect(ROAD_LENGTH, 0, ROAD_RADIUS * 2, CANVAS_RADIUS * 2);
      ctx.fillRect(0, ROAD_LENGTH, CANVAS_RADIUS * 2, ROAD_RADIUS * 2);

      // Boundary lines
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgb(0, 0, 0)';
      ctx.beginPath();
      ctx.lineTo(CANVAS_RADIUS + ROAD_RADIUS, 0.0);
      ctx.lineTo(CANVAS_RADIUS + ROAD_RADIUS, ROAD_LENGTH);
      ctx.lineTo(2 * CANVAS_RADIUS, ROAD_LENGTH);
      ctx.lineTo(2 * CANVAS_RADIUS, CANVAS_RADIUS + ROAD_RADIUS);
      ctx.lineTo(CANVAS_RADIUS + ROAD_RADIUS, CANVAS_RADIUS + ROAD_RADIUS);
      ctx.lineTo(CANVAS_RADIUS + ROAD_RADIUS, 2 * CANVAS_RADIUS);
      ctx.lineTo(ROAD_LENGTH, 2 * CANVAS_RADIUS);
      ctx.lineTo(ROAD_LENGTH, CANVAS_RADIUS + ROAD_RADIUS);
      ctx.lineTo(0.0, CANVAS_RADIUS + ROAD_RADIUS);
      ctx.lineTo(0.0, ROAD_LENGTH);
      ctx.lineTo(ROAD_LENGTH, ROAD_LENGTH);
      ctx.lineTo(ROAD_LENGTH, 0.0);
      ctx.stroke();

      // Mid lines
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgb(219,219,217)';
      ctx.beginPath();
      ctx.moveTo(CANVAS_RADIUS, 0);
      ctx.lineTo(CANVAS_RADIUS, 2 * CANVAS_RADIUS);
      ctx.moveTo(0, CANVAS_RADIUS);
      ctx.lineTo(2 * CANVAS_RADIUS, CANVAS_RADIUS);
      ctx.stroke();

      // Mark intersection bounds
      ctx.beginPath();
      // Left
      ctx.moveTo(ROAD_LENGTH, ROAD_LENGTH);
      ctx.lineTo(ROAD_LENGTH, CANVAS_RADIUS + ROAD_RADIUS);
      // Right
      ctx.moveTo(CANVAS_RADIUS + ROAD_RADIUS, ROAD_LENGTH);
      ctx.lineTo(CANVAS_RADIUS + ROAD_RADIUS, CANVAS_RADIUS + ROAD_RADIUS);
      // Top
      ctx.moveTo(ROAD_LENGTH, ROAD_LENGTH);
      ctx.lineTo(CANVAS_RADIUS + ROAD_RADIUS, ROAD_LENGTH);
      // Bottom
      ctx.moveTo(ROAD_LENGTH, CANVAS_RADIUS + ROAD_RADIUS);
      ctx.lineTo(CANVAS_RADIUS + ROAD_RADIUS, CANVAS_RADIUS + ROAD_RADIUS);
      ctx.stroke();

      // Mark lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgb(219,219,217)';
      ctx.setLineDash([5, 13]);
      ctx.beginPath();
      // Left mid vertical 1
      ctx.moveTo(CANVAS_RADIUS - ROAD_RADIUS / 3, 0);
      ctx.lineTo(CANVAS_RADIUS - ROAD_RADIUS / 3, 2 * CANVAS_RADIUS);
      // Left mid vertical 2
      ctx.moveTo(CANVAS_RADIUS - ROAD_RADIUS / 3 * 2, 0);
      ctx.lineTo(CANVAS_RADIUS - ROAD_RADIUS / 3 * 2, 2 * CANVAS_RADIUS);
      // Right mid vertical 1
      ctx.moveTo(CANVAS_RADIUS + ROAD_RADIUS / 3, 0);
      ctx.lineTo(CANVAS_RADIUS + ROAD_RADIUS / 3, 2 * CANVAS_RADIUS);
      // Right mid vertical 2
      ctx.moveTo(CANVAS_RADIUS + ROAD_RADIUS / 3 * 2, 0);
      ctx.lineTo(CANVAS_RADIUS + ROAD_RADIUS / 3 * 2, 2 * CANVAS_RADIUS);
      // Top mid horizontal 1
      ctx.moveTo(0, CANVAS_RADIUS - ROAD_RADIUS / 3);
      ctx.lineTo(2 * CANVAS_RADIUS, CANVAS_RADIUS - ROAD_RADIUS / 3);
      // Top mid horizontal 2
      ctx.moveTo(0, CANVAS_RADIUS - ROAD_RADIUS / 3 * 2);
      ctx.lineTo(2 * CANVAS_RADIUS, CANVAS_RADIUS - ROAD_RADIUS / 3 * 2);
      // Down mid horizontal 1
      ctx.moveTo(0, CANVAS_RADIUS + ROAD_RADIUS / 3);
      ctx.lineTo(2 * CANVAS_RADIUS, CANVAS_RADIUS + ROAD_RADIUS / 3);
      // Down mid horizontal 2
      ctx.moveTo(0, CANVAS_RADIUS + ROAD_RADIUS / 3 * 2);
      ctx.lineTo(2 * CANVAS_RADIUS, CANVAS_RADIUS + ROAD_RADIUS / 3 * 2);
      ctx.stroke();
    };
  }

  ngOnInit() {

  }

}
