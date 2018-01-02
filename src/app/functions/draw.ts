// Set background layout
import {CANVAS_LENGTH, CANVAS_RADIUS, ROAD_LENGTH, ROAD_RADIUS, TRAFFIC_LIGHT_RADIUS} from "../common/globals";
import {Vehicle} from "../models/vehicle";
import {TrafficLightState} from "../models/traffic-light-state.enum";

export function setBackgroundLayout(canvas: any) {
  canvas.width = CANVAS_LENGTH;
  canvas.height = CANVAS_LENGTH;
};

// Draw the background
export function drawBackground(ctx: any) {
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
  ctx.setLineDash([]);
};

// Draw straight lanes
export function drawVehicleOnLane(ctx: any, vehicle: Vehicle, rectHeight: number, rectWidth: number, rectX: number, rectY: number) {
  ctx.fillStyle = vehicle.color;
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
};

// Draw intersection - Arc
export function drawVehicleOnIntersectionArc(ctx: any, vehicle: Vehicle, rectHeight: number, rectWidth: number, startX: number,
                                             startY: number, rotateAngle: number, pivotX: number, pivotY: number) {
  ctx.fillStyle = vehicle.color;

  // rect.setHeight(rectHeight);
  // rect.setWidth(rectWidth);
  //
  // rect.setX(startX);
  // rect.setY(startY);
  //
  // rect.getTransforms().add(new Rotate(rotateAngle, pivotX, pivotY));
  //
  // canvas.getChildren().add(rect);
};

// Draw intersection
export function drawVehicleOnIntersection(ctx: any, vehicle: Vehicle, rectHeight: number, rectWidth: number, startX: number,
                                          startY: number) {
  ctx.fillStyle = vehicle.color;
  ctx.fillRect(startX, startY, rectWidth, rectHeight);
};

// Draw traffic lights
export function drawTrafficLight(ctx: any, midX: number, midY: number, state: TrafficLightState) {
  switch (state) {
    case TrafficLightState.Red:
      ctx.fillStyle = '#ef5350';
      ctx.strokeStyle = '#ef5350';
      break;
    case TrafficLightState.Orange:
      ctx.fillStyle = '#FFA726';
      ctx.strokeStyle = '#FFA726';
      break;
    case TrafficLightState.Green:
      ctx.fillStyle = '#66BB6A';
      ctx.strokeStyle = '#66BB6A';
      break;
    case TrafficLightState.Off:
      ctx.fillStyle = '#607D8B';
      ctx.strokeStyle = '#607D8B';
      break;

  }
  ;

  ctx.beginPath();
  ctx.arc(midX, midY, TRAFFIC_LIGHT_RADIUS, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
};
