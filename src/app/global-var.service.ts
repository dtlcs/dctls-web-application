import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarService {

  BACKGROUND_REFRESH_INTERVAL: number = 30;
  CANVAS_REFRESH_INTERVAL: number = 30;

  CANVAS_RADIUS: number = 400.0;
  CANVAS_LENGTH: number = this.CANVAS_RADIUS * 2;
  ROAD_RADIUS: number = 50.0;
  ROAD_LENGTH: number = this.CANVAS_RADIUS - this.ROAD_RADIUS;

}
