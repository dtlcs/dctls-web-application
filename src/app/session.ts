import {TrafficLight} from "./models/traffic-light";
import {RoadMap} from "./models/road-map";
import {Junction} from "./models/junction";
import {Road} from "./models/road";
import {Intersection} from "./models/intersection";

export class Session {

  isStarted = false;

  vehicleDensity = 10;
  averageGap = 5;
  averageSpeed = 8;

  roadMap: RoadMap;
  junction: Junction;

  nRoad: Road;
  eRoad: Road;
  sRoad: Road;
  wRoad: Road;

  intersection: Intersection;

  nIntRoad: Map;
  eIntRoad: Map;
  sIntRoad: Map;
  wIntRoad: Map;

  northLane1TrafficLight: TrafficLight;
  northLane2TrafficLight: TrafficLight;
  northLane3TrafficLight: TrafficLight;
  eastLane1TrafficLight: TrafficLight;
  eastLane2TrafficLight: TrafficLight;
  eastLane3TrafficLight: TrafficLight;
  southLane1TrafficLight: TrafficLight;
  southLane2TrafficLight: TrafficLight;
  southLane3TrafficLight: TrafficLight;
  westLane1TrafficLight: TrafficLight;
  westLane2TrafficLight: TrafficLight;
  westLane3TrafficLight: TrafficLight;

  vehicleMap = new Map();

  setRoadMap(roadMap: RoadMap) {
    this.roadMap = roadMap;

    this.junction = roadMap.junction;
    this.nRoad = roadMap.junction.getRoad(1);
    this.eRoad = roadMap.junction.getRoad(2);
    this.sRoad = roadMap.junction.getRoad(3);
    this.wRoad = roadMap.junction.getRoad(4);

    this.intersection = roadMap.junction.intersection;
    this.nIntRoad = this.intersection.nIntRoad;
    this.eIntRoad = this.intersection.eIntRoad;
    this.sIntRoad = this.intersection.sIntRoad;
    this.wIntRoad = this.intersection.wIntRoad;

    this.northLane1TrafficLight = this.nRoad.getLane(1).trafficLight;
    this.northLane2TrafficLight = this.nRoad.getLane(2).trafficLight;
    this.northLane3TrafficLight = this.nRoad.getLane(3).trafficLight;
    this.eastLane1TrafficLight = this.eRoad.getLane(1).trafficLight;
    this.eastLane2TrafficLight = this.eRoad.getLane(2).trafficLight;
    this.eastLane3TrafficLight = this.eRoad.getLane(3).trafficLight;
    this.southLane1TrafficLight = this.sRoad.getLane(1).trafficLight;
    this.southLane2TrafficLight = this.sRoad.getLane(2).trafficLight;
    this.southLane3TrafficLight = this.sRoad.getLane(3).trafficLight;
    this.westLane1TrafficLight = this.wRoad.getLane(1).trafficLight;
    this.westLane2TrafficLight = this.wRoad.getLane(2).trafficLight;
    this.westLane3TrafficLight = this.wRoad.getLane(3).trafficLight;
  }

}
