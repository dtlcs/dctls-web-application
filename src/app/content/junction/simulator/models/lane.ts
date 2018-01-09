import {LaneType} from "./lane-type.enum";
import {Vehicle} from "./vehicle";
import {TrafficLight} from "./traffic-light";
import {ROAD_LENGTH, ROAD_RADIUS} from "../globals";
import {AppInjector} from "../../../../common/injector";
import {SessionService} from "../services/session.service";
import {TrafficLightState} from "./traffic-light-state.enum";

export class Lane {

  laneId: number;
  laneType: LaneType;
  length: number;

  vehicleList: any;                 // Vehicle queue
  trafficLight: TrafficLight;             // Traffic light model

  constructor(laneId: number) {
    this.laneId = laneId;

    this.vehicleList = [];
    this.trafficLight = new TrafficLight();

    switch (laneId) {
      case 0:
      case 1:
      case 2:
        this.laneType = LaneType.In;
        this.length = ROAD_LENGTH + ROAD_RADIUS;
        break;
      case 3:
      case 4:
      case 5:
        this.laneType = LaneType.Out;
        this.length = ROAD_LENGTH + ROAD_RADIUS;
        break;
      case 6:
        this.laneType = LaneType.Int;
        this.length = (Math.PI * (ROAD_RADIUS / 6) / 2) + ROAD_RADIUS;
        break;
      case 7:
        this.laneType = LaneType.Int;
        this.length = (ROAD_RADIUS * 2) + ROAD_RADIUS;
        break;
      case 8:
        this.laneType = LaneType.Int;
        this.length = (Math.PI * (ROAD_RADIUS + ROAD_RADIUS / 6) / 2) + ROAD_RADIUS;
        break;
    }
  }

  addVehicleToQueue (vehicle: Vehicle) {
    this.vehicleList.push(vehicle);
    vehicle.trajectory.lane = this;
    vehicle.trajectory.laneIndex = this.vehicleList.length - 1;
  }

  isSpaceAvailable (vehicle: Vehicle): boolean {
    const session = AppInjector.get(SessionService);

    if (this.vehicleList.length > 0) {
      var frontVehicle = this.vehicleList[this.vehicleList.length - 1];
      if (vehicle.length < frontVehicle.trajectory.location - frontVehicle.length - session.averageGap) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}
