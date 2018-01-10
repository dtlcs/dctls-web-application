
import {Lane} from "../models/lane";
import {ROAD_LENGTH, ROAD_RADIUS} from "../simulator.constants";
import {TrafficLightState} from "../models/traffic-light-state.enum";
import {Junction} from "../models/junction";

// Move vehicles in lane
export function moveInLaneVehicles (lane: Lane, junction: Junction) {
  // lane.resetSensorArray();
  var vehicles = lane.vehicleList;

  var iter = vehicles.length;
  while (iter--) {
    var v = vehicles[iter];

    if (v.trajectory.location >= ROAD_LENGTH) {
      var trafficLightGreen = junction.getRoad(v.trajectory.origin).getLane(v.trajectory.startLaneId).trafficLight.state == TrafficLightState.Green;
      var spaceAvalable = junction.intersection.getIntLane(v.trajectory.origin, 5 + v.trajectory.destinationDiff).isSpaceAvailable(v);

      if (trafficLightGreen && spaceAvalable) {
        vehicles.splice(iter, 1);
        junction.intersection.appendVehicleToIntLane(v, v.trajectory.origin, 5 + v.trajectory.destinationDiff);

        // Reset lane positions
        for (var i = 0; i < vehicles.length; i++) {
          vehicles[i].trajectory.laneIndex = i;
        }
      }
    } else {
      v.move();

      // Check sensor positions
      // if(v.trajectory.location % Global.DPS <= v.length){
      //   lane.getSensorArray()[9 - ((int) (v.trajectory.location / Global.DPS) % 10)] = true;
      // }
    }
  }
};

// Move out lane vehicles
export function moveOutLaneVehicles (lane: Lane) {
  // lane.resetSensorArray();
  var vehicles = lane.vehicleList;

  var iter = vehicles.length;
  while (iter--) {
    var v = vehicles[iter];
    if (v.trajectory.location >= ROAD_LENGTH) {
      vehicles.splice(iter, 1);

      // Reset lane positions
      for (var i = 0; i < vehicles.length; i++) {
        vehicles[i].trajectory.laneIndex = i;
      }
    } else {
      v.move();

      // Check sensor positions
      // if(v.getTrajectory().getLocation() % Global.DPS <= v.getLength()){
      //   lane.getSensorArray()[(int) (v.getTrajectory().getLocation() / Global.DPS) % 10] = true;
      // }
    }
  }
}

// Move intersection vehicles - Small curve
export function  moveIntersectionVehiclesSmallArc(lane: Lane, junction: Junction) {
  var vehicles = lane.vehicleList;

  var iter = vehicles.length;
  while (iter--) {
    var v = vehicles[iter];

    var laneWidth = ROAD_RADIUS / 6;
    var thetaRadSmall = v.trajectory.location / (laneWidth + v.length / 2);
    if (thetaRadSmall >= Math.PI / 2) {
      if (junction.getRoad(v.trajectory.destination).getLane(2 + v.trajectory.destinationDiff).isSpaceAvailable(v)) {
        vehicles.splice(iter, 1);
        junction.getRoad(v.trajectory.destination).appendVehicleToOutLane(v, 5);

        // Reset lane positions
        for (var i = 0; i < vehicles.length; i++) {
          vehicles[i].trajectory.laneIndex = i;
        }
      }
    } else {
      v.move();
    }
  }
}

// Move intersection vehicles straight
export function moveIntersectionVehiclesStraight (lane: Lane, junction: Junction) {
  var vehicles = lane.vehicleList;

  var iter = vehicles.length;
  while (iter--) {
    var v = vehicles[iter];

    if (v.trajectory.location >= ROAD_RADIUS * 2 + v.length) {
      if (junction.getRoad(v.trajectory.destination).getLane(2 + v.trajectory.destinationDiff).isSpaceAvailable(v)) {
        vehicles.splice(iter, 1);
        junction.getRoad(v.trajectory.destination).appendVehicleToOutLane(v, 4);

        // Reset lane positions
        for (var i = 0; i < vehicles.length; i++) {
          vehicles[i].trajectory.laneIndex = i;
        }
      }
    } else {
      v.move();
    }
  }
}

// Move intersection vehicles - Large curve
export function moveIntersectionVehiclesLargeArc(lane: Lane, junction: Junction) {
  var vehicles = lane.vehicleList;

  var iter = vehicles.length;
  while (iter--) {
    var v = vehicles[iter];

    var laneWidth = ROAD_RADIUS / 6;
    var thetaRadLarge = v.trajectory.location / (ROAD_RADIUS + laneWidth + v.length / 2);
    if (thetaRadLarge >= Math.PI / 2) {
      if (junction.getRoad(v.trajectory.destination).getLane(2 + v.trajectory.destinationDiff).isSpaceAvailable(v)) {
        vehicles.splice(iter, 1);
        junction.getRoad(v.trajectory.destination).appendVehicleToOutLane(v, 3);

        // Reset lane positions
        for (var i = 0; i < vehicles.length; i++) {
          vehicles[i].trajectory.laneIndex = i;
        }
      }
    } else {
      v.move();
    }
  }
}
