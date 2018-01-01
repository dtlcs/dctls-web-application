import {RoadMap} from "./models/road-map";
import {Junction} from "./models/junction";
import {Road} from "./models/road";
import {Intersection} from "./models/intersection";
import {TrafficLight} from "./models/traffic-light";
import {Lane} from "./models/lane";

export class Session {

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

  nIntRoad: Lane[];
  eIntRoad: Lane[];
  sIntRoad: Lane[];
  wIntRoad: Lane[];

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

}
