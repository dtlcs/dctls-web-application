import {Junction} from './junction';
import {Session} from "../session";

export class RoadMap {

  session:Session;

  junction: Junction;

  isNorthEnabled = false;
  isEastEnabled = false;
  isSouthEnabled = false;
  isWestEnabled = false;

  constructor(session: Session) {
    this.session = session;
  }

  populateRoadMap(){
    if(this.isNorthEnabled) {
      this.junction.getRoad(0).populateRoad();
    }

    if (this.isEastEnabled) {
      this.junction.getRoad(1).populateRoad();
    }

    if (this.isSouthEnabled) {
      this.junction.getRoad(2).populateRoad();
    }

    if (this.isWestEnabled) {
      this.junction.getRoad(3).populateRoad();
    }
  }
}
