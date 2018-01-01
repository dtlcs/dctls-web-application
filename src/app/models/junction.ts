import {Road} from "./road";
import {Intersection} from "./intersection";
import {Session} from "../session";

export class Junction {

  session: Session;

  roadList: Road[];
  intersection: Intersection;

  constructor(session: Session) {
    this.session = session;

    this.roadList.push(new Road(session,0));    // North
    this.roadList.push(new Road(session,1));    // East
    this.roadList.push(new Road(session,2));    // South
    this.roadList.push(new Road(session,3));    // West

    this.intersection = new Intersection(session);
  }

  getRoad(roadId: number){
    return this.roadList[roadId];
  }

}
