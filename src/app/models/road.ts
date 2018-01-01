import {Lane} from "./lane";

export class Road {

  roadId: number;
  laneList: Lane[];

  constructor(roadId: number) {
    this.roadId = roadId;

    this.laneList.push(new Lane(0));      // In-lane 1
    this.laneList.push(new Lane(1));      // In-lane 2
    this.laneList.push(new Lane(2));      // In-lane 3
    this.laneList.push(new Lane(3));      // Out-lane 1
    this.laneList.push(new Lane(4));      // Out-lane 2
    this.laneList.push(new Lane(5));      // Out-lane 3
  }

  getLane(laneId:number){
    return this.laneList[laneId];
  }

  populateRoad(){

  }

}
