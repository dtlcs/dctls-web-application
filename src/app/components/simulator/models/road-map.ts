import {Junction} from './junction';

export class RoadMap {

    junction: Junction;

    isNorthEnabled = true;
    isEastEnabled = true;
    isSouthEnabled = true;
    isWestEnabled = true;

    constructor() {
        this.junction = new Junction();
    }

    populateRoadMap() {
        if (this.isNorthEnabled) {
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
