import {Lane} from './lane';
import {Vehicle} from './vehicle';

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

    isAtFront(): boolean {
        return this.laneIndex == 0;
    }

    getFrontVehicle(): Vehicle {
        if (this.isAtFront()) {
            return null;
        } else {
            return this.lane.vehicleList[this.laneIndex - 1];
        }
    }

    getDistanceToStopLine(): number {
        return Math.abs(this.lane.length - this.location);
    }

}
