import {LaneType} from "./lane-type.enum";
import {Vehicle} from "./vehicle";
import {TrafficLight} from "./traffic-light";
import {ROAD_LENGTH, ROAD_RADIUS} from "../globals";

export class Lane {

  laneId: number;
  laneType: LaneType;
  length: number;

  vehicleList: Vehicle[];                 // Vehicle queue
  trafficLight = new TrafficLight();      // Traffic light model

  constructor(laneId: number) {
    this.laneId = laneId;

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

  addVehicleToQueue(vehicle: Vehicle) {
    this.vehicleList.push(vehicle);
    vehicle.getTrajectory().setLane(this);
    vehicle.getTrajectory().setLaneIndex(this.vehicleList.length - 1);
  }

  isSpaceAvailable(vehicle: Vehicle) {
    if (this.vehicleList.length > 0) {
      frontVehicle: Vehicle = this.vehicleList.[this.vehicleList.length - 1];
      if (vehicle.getLength() < frontVehicle.getTrajectory().getLocation() - frontVehicle.getLength() - Session.getAverageGap()) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}
