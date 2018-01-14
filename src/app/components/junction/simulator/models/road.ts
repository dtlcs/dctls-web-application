import {Lane} from "./lane";
import {Vehicle} from "./vehicle";
import {AppInjector} from "../../../../injector";
import {SessionService} from "../services/session.service";

export class Road {

  roadId: number;
  laneList: Lane[] = [];

  constructor(roadId: number) {
    this.roadId = roadId;

    this.laneList.push(new Lane(0));      // In-lane 1
    this.laneList.push(new Lane(1));      // In-lane 2
    this.laneList.push(new Lane(2));      // In-lane 3
    this.laneList.push(new Lane(3));      // Out-lane 1
    this.laneList.push(new Lane(4));      // Out-lane 2
    this.laneList.push(new Lane(5));      // Out-lane 3
  }

  getLane(laneId: number): Lane {
    return this.laneList[laneId];
  }

  populateRoad() {
    const session = AppInjector.get(SessionService);

    if ((this.laneList[0].vehicleList.length + this.laneList[1].vehicleList.length + this.laneList[2].vehicleList.length) < session.vehicleDensity) {
      this.generateInVehicle();
    }
  }

  // Generate vehicle in In-lanes
  generateInVehicle() {
    var origin = this.roadId;
    var destinationDiff = Math.round((Math.random() + 0.5) * 2);
    var preDestination = origin + destinationDiff;

    var destination = preDestination;
    if (destination > 3) {
      destination = destination - 3;
    }

    var startLane = this.laneList[destinationDiff - 1];
    var vehicle = new Vehicle(origin, destination, destinationDiff, startLane.laneId);

    this.appendVehicleToInLane(vehicle, startLane);
  }

  // Add vehicle to lane
  appendVehicleToInLane(vehicle: Vehicle, lane: Lane) {
    const session = AppInjector.get(SessionService);

    if (lane.vehicleList.length > 0) {
      var frontVehicle = lane.vehicleList[lane.vehicleList.length - 1];
      // if (vehicle.trajectory.location < frontVehicle.trajectory.location - frontVehicle.length - session.averageGap) {
      //   vehicle.trajectory.location = vehicle.length;
      //   vehicle.velocity = 0.0;
      //   lane.addVehicleToQueue(vehicle);
      // }

      vehicle.trajectory.location = frontVehicle.trajectory.location - frontVehicle.length - session.averageGap;
      vehicle.velocity = 0.0;
      lane.addVehicleToQueue(vehicle);
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
