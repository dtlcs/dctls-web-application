import {Road} from './road';
import {Intersection} from './intersection';

export class Junction {

  roadList: Road[];
  intersection: Intersection;
  getRoad = (roadId: number): Road => {
    return this.roadList[roadId];
  };

  constructor() {
    this.roadList = [];

    this.roadList.push(new Road(0));    // North
    this.roadList.push(new Road(1));    // East
    this.roadList.push(new Road(2));    // South
    this.roadList.push(new Road(3));    // West

    this.intersection = new Intersection();
  }

}
