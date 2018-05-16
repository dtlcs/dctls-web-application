import {Lane} from './lane';
import {Vehicle} from './vehicle';

export class Intersection {

  // Road list
  nIntRoad = new Map();
  eIntRoad = new Map();
  sIntRoad = new Map();
  wIntRoad = new Map();

  intLaneMap = [this.nIntRoad, this.eIntRoad, this.sIntRoad, this.wIntRoad];

  constructor() {
    // Initializing intersection lanes
    for (var i = 0; i < 4; i++) {
      var intRoad = this.intLaneMap[i];
      intRoad.set(6, new Lane(6));
      intRoad.set(7, new Lane(7));
      intRoad.set(8, new Lane(8));
    }
  }

  getIntLane(roadId: number, laneId: number): Lane {
    return this.intLaneMap[roadId].get(laneId);
  }

  appendVehicleToIntLane(vehicle: Vehicle, roadId: number, laneId: number) {
    vehicle.trajectory.location = 0;
    this.intLaneMap[roadId].get(laneId).addVehicleToQueue(vehicle);
  }

}
