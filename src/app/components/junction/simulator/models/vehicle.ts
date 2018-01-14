import {Trajectory} from "./trajectory";
import {CANVAS_RADIUS} from "../simulator.constants";
import {AppInjector} from "../../../../injector";
import {SessionService} from "../services/session.service";

export class Vehicle {

  session: SessionService;

  birthTime = Date.now();
  length = 15 + (Math.random() * 10);
  width = 8;
  color = this.getRandomVehicleColor();

  desiredVelocity: number;
  maxAcceleration = 1;
  breakingDeceleration = 1.2;
  timeHeadway = 0.1;
  minimumGap = 3.0;
  velocity = 0;

  trajectory: Trajectory;

  constructor(origin: number, destination: number, preDestination: number, startLaneId: number) {
     this.session = AppInjector.get(SessionService);

    if (!this.session.vehicleMap.has(this.toString())) {
      this.session.vehicleMap.set(this.toString(), this);
    }

    this.desiredVelocity = Math.random() * 3.5 + (this.session.averageSpeed * 0.5);

    this.trajectory = new Trajectory(origin, destination, preDestination, startLaneId, this.length);
  }

  // Return a random vehicle color from a predefined list
  getRandomVehicleColor(): string {
    var colors = [];
    colors.push('#1976D2');
    colors.push('#C2185B');
    colors.push('#00796B');
    colors.push('#F57C00');
    colors.push('#AFB42B');
    colors.push('#E64A19');
    colors.push('#03A9F4');
    colors.push('#d32f2f');
    colors.push('#512DA8');
    colors.push('#FBC02D');
    colors.push('#5D4037');
    colors.push('#388E3C');
    colors.push('#7986CB');
    colors.push('#4DB6AC');
    colors.push('#2196F3');
    colors.push('#00695C');
    colors.push('#8E24AA');

    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Calculate acceleration
  getAcceleration(): number {
    var distanceToNextCar;
    if (this.trajectory.isAtFront()) {
      distanceToNextCar = CANVAS_RADIUS - this.trajectory.location;
    } else {
      var frontVehicle = this.trajectory.getFrontVehicle();
      distanceToNextCar = frontVehicle.trajectory.location - this.trajectory.location - frontVehicle.length;
    }

    var a = this.maxAcceleration;
    var b = this.breakingDeceleration;

    var deltaSpeed = this.getDeltaSpeed();

    var speed = this.velocity;
    var maxSpeed = this.desiredVelocity;
    var freeRoadCoeff = Math.pow(speed / maxSpeed, 4);

    var distanceGap = this.minimumGap;
    var timeGap = speed * this.timeHeadway;
    var breakGap = (speed * deltaSpeed) / (2 * Math.sqrt(a * b));
    var safeDistance = distanceGap + timeGap + breakGap;

    var busyRoadCoeff = Math.pow(safeDistance / distanceToNextCar, 2);
    var safeIntersectionDistance = 1 + timeGap + (Math.pow(speed, 2) / (2 * b));
    var intersectionCoeff = Math.pow(safeIntersectionDistance / this.trajectory.getDistanceToStopLine(), 2);
    var coeff = 1 - freeRoadCoeff - busyRoadCoeff - intersectionCoeff;

    return this.maxAcceleration * coeff;
  }

  // Speed difference
  getDeltaSpeed(): number {
    if (this.trajectory.isAtFront()) {
      return this.velocity;
    } else {
      return this.velocity - this.trajectory.getFrontVehicle().velocity;
    }
  }

  // Move the vehicle in oen time unit
  move() {
    var delta = 0.5;
    var acceleration = this.getAcceleration();

    var temp_velocity = this.velocity;
    temp_velocity += acceleration * delta;
    var temp_step = (temp_velocity * delta) + (0.5 * acceleration * Math.pow(delta, 2));

    // I am not sure if we need this condition. >> Just a way to stop negative steps and over steps
    if (temp_step >= 0 && (this.trajectory.getFrontVehicle() == null
        || this.trajectory.location + this.session.averageGap + Math.abs(temp_step) < this.trajectory.getFrontVehicle().trajectory.location - this.trajectory.getFrontVehicle().length)) {
      this.velocity += acceleration * delta;
      var step = (this.velocity * delta) + (0.5 * acceleration * Math.pow(delta, 2));

      this.trajectory.location = this.trajectory.location + step;
    }
  }

}
