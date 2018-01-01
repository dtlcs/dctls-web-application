import {Road} from "./road";
import {Intersection} from "./intersection";

export class Junction {

  roadList: Road[];
  intersection = new Intersection();

  constructor() {
    this.roadList.push(new Road(0));    // North
    this.roadList.push(new Road(1));    // East
    this.roadList.push(new Road(2));    // South
    this.roadList.push(new Road(3));    // West
  }

  getRoad(roadId: number){
    return this.roadList[roadId];
  }

}
