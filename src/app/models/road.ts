import {Lane} from "./lane";
import {Session} from "../session";
import {Vehicle} from "./vehicle";

export class Road {

  session: Session;

  roadId: number;
  laneList: Lane[];

  constructor(session: Session, roadId: number) {
    this.session = session;

    this.roadId = roadId;

    this.laneList.push(new Lane(session, 0));      // In-lane 1
    this.laneList.push(new Lane(session, 1));      // In-lane 2
    this.laneList.push(new Lane(session, 2));      // In-lane 3
    this.laneList.push(new Lane(session, 3));      // Out-lane 1
    this.laneList.push(new Lane(session, 4));      // Out-lane 2
    this.laneList.push(new Lane(session, 5));      // Out-lane 3
  }

  getLane(laneId: number) {
    return this.laneList[laneId];
  }

  populateRoad() {
    if (this.laneList[0].vehicleList.length + this.laneList[1].vehicleList.length +
      this.laneList[2].vehicleList.length < this.session.vehicleDensity) {
      this.generateInVehicle()();
    }
  }

  // Generate vehicle in In-lanes
  generateInVehicle() {
    var origin = this.roadId;
    var destinationDiff = 1 + parseInt((Math.random() + 0.4) * 2, 10);
    var preDestination = origin + destinationDiff;

    var destination = preDestination;
    if (destination > 4) {
      destination = destination - 4;
    }

    var startLane = this.laneList[destinationDiff];
    var vehicle = new Vehicle(this.session, origin, destination, destinationDiff, startLane.laneId);

    this.appendVehicleToInLane(vehicle, startLane);
  }

  // Add vehicle to lane
  appendVehicleToInLane(vehicle: Vehicle, lane: Lane) {
    if (lane.vehicleList.length > 0) {
      var frontVehicle = lane.vehicleList[lane.vehicleList.length - 1];
      if (vehicle.trajectory.location < frontVehicle.trajectory.location - frontVehicle.length - this.session.averageGap) {
        vehicle.trajectory.location = vehicle.length;
        vehicle.velocity = 0.0;
        lane.addVehicleToQueue(vehicle);
      }
    } else {
      vehicle.trajectory.location = vehicle.length;
      vehicle.velocity = 0.0;
      lane.addVehicleToQueue(vehicle);
    }
  }

  // Add vehicles to remove queue
  appendVehicleToOutLane(vehicle: Vehicle, laneId: number) {
    vehicle.trajectory.location = vehicle.length;
    this.laneList[laneId].addVehicleToQueue(vehicle);
  }

}
