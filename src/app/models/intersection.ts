import {Lane} from "./lane";
import {Vehicle} from "./vehicle";
import {Session} from "../session";

export class Intersection {

  session: Session;

  // Road list
  nIntRoad = new Map();
  eIntRoad = new Map();
  sIntRoad = new Map();
  wIntRoad = new Map();

  intLaneMap = [this.nIntRoad, this.eIntRoad, this.sIntRoad, this.wIntRoad];

  constructor(session: Session) {
    this.session = session;

    // Initializing intersection lanes
    for (let i = 0; i < 4; i++) {
      let intRoad = this.intLaneMap[i];
      intRoad.set(6, new Lane(session,6));
      intRoad.set(7, new Lane(session,7));
      intRoad.set(8, new Lane(session,8));
    }
  }

  getIntLane(roadId: number, laneId: number) {
    return this.intLaneMap[roadId].get(laneId);
  }

  appendVehicleToIntLane(vehicle: Vehicle, roadId: number, laneId: number) {
    vehicle.trajectory.location = 0;
    this.intLaneMap[roadId].get(laneId).addVehicleToQueue(vehicle);
  }

}
