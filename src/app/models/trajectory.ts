import {Lane} from "./lane";

export class Trajectory {

  origin: number;
  destination: number;
  destinationDiff: number;
  startLaneId: number;

  location: number;

  lane: Lane;
  laneIndex: number;

  constructor(origin: number, destination: number, destinationDiff: number, startLaneId: number, location: number) {
    this.origin = origin;
    this.destination = destination;
    this.destinationDiff = destinationDiff;
    this.startLaneId = startLaneId;

    this.location = location;
  }

  isAtFront() {
    return this.laneIndex == 0;
  }

  getFrontVehicle() {
    if (this.isAtFront()) {
      return null;
    } else {
      return this.lane.vehicleList[this.laneIndex - 1];
    }
  }

  getDistanceToStopLine() {
    return Math.abs(this.lane.length - location);
  }

}
