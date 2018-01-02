import {Component, OnInit} from '@angular/core';
import {
  BACKGROUND_REFRESH_INTERVAL, CANVAS_RADIUS, CANVAS_REFRESH_INTERVAL, ROAD_LENGTH, ROAD_RADIUS,
  TRAFFIC_LIGHT_RADIUS
} from "../../common/globals";
import {SessionService} from "../../services/session.service";
import {RoadMap} from "../../models/road-map";
import {
  drawBackground, drawTrafficLight, drawVehicleOnIntersection, drawVehicleOnIntersectionArc,
  drawVehicleOnLane, setBackgroundLayout
} from "../../functions/draw";
import {
  moveInLaneVehicles,
  moveIntersectionVehiclesLargeArc, moveIntersectionVehiclesSmallArc, moveIntersectionVehiclesStraight,
  moveOutLaneVehicles
} from "../../functions/worker";

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  constructor(sessionService: SessionService) {
    sessionService.setRoadMap(new RoadMap());

    // Background worker
    window.setInterval(function () {
      sessionService.roadMap.populateRoadMap();

      moveInLaneVehicles(sessionService.nRoad.getLane(0), sessionService.junction);
      moveInLaneVehicles(sessionService.nRoad.getLane(1), sessionService.junction);
      moveInLaneVehicles(sessionService.nRoad.getLane(2), sessionService.junction);
      moveInLaneVehicles(sessionService.eRoad.getLane(0), sessionService.junction);
      moveInLaneVehicles(sessionService.eRoad.getLane(1), sessionService.junction);
      moveInLaneVehicles(sessionService.eRoad.getLane(2), sessionService.junction);
      moveInLaneVehicles(sessionService.sRoad.getLane(0), sessionService.junction);
      moveInLaneVehicles(sessionService.sRoad.getLane(1), sessionService.junction);
      moveInLaneVehicles(sessionService.sRoad.getLane(2), sessionService.junction);
      moveInLaneVehicles(sessionService.wRoad.getLane(0), sessionService.junction);
      moveInLaneVehicles(sessionService.wRoad.getLane(1), sessionService.junction);
      moveInLaneVehicles(sessionService.wRoad.getLane(2), sessionService.junction);

      moveOutLaneVehicles(sessionService.nRoad.getLane(5));
      moveOutLaneVehicles(sessionService.nRoad.getLane(4));
      moveOutLaneVehicles(sessionService.nRoad.getLane(3));
      moveOutLaneVehicles(sessionService.eRoad.getLane(5));
      moveOutLaneVehicles(sessionService.eRoad.getLane(4));
      moveOutLaneVehicles(sessionService.eRoad.getLane(3));
      moveOutLaneVehicles(sessionService.sRoad.getLane(5));
      moveOutLaneVehicles(sessionService.sRoad.getLane(4));
      moveOutLaneVehicles(sessionService.sRoad.getLane(3));
      moveOutLaneVehicles(sessionService.wRoad.getLane(5));
      moveOutLaneVehicles(sessionService.wRoad.getLane(4));
      moveOutLaneVehicles(sessionService.wRoad.getLane(3));

      moveIntersectionVehiclesSmallArc(sessionService.nIntRoad.get(6), sessionService.junction);
      moveIntersectionVehiclesStraight(sessionService.nIntRoad.get(7), sessionService.junction);
      moveIntersectionVehiclesLargeArc(sessionService.nIntRoad.get(8), sessionService.junction);
      moveIntersectionVehiclesSmallArc(sessionService.eIntRoad.get(6), sessionService.junction);
      moveIntersectionVehiclesStraight(sessionService.eIntRoad.get(7), sessionService.junction);
      moveIntersectionVehiclesLargeArc(sessionService.eIntRoad.get(8), sessionService.junction);
      moveIntersectionVehiclesSmallArc(sessionService.sIntRoad.get(6), sessionService.junction);
      moveIntersectionVehiclesStraight(sessionService.sIntRoad.get(7), sessionService.junction);
      moveIntersectionVehiclesLargeArc(sessionService.sIntRoad.get(8), sessionService.junction);
      moveIntersectionVehiclesSmallArc(sessionService.wIntRoad.get(6), sessionService.junction);
      moveIntersectionVehiclesStraight(sessionService.wIntRoad.get(7), sessionService.junction);
      moveIntersectionVehiclesLargeArc(sessionService.wIntRoad.get(8), sessionService.junction);

    }, BACKGROUND_REFRESH_INTERVAL);

    // Canvas worker
    window.setInterval(function () {
      var vehicles;
      var iter;
      var canvas: any = document.querySelector('#backgroundCanvasAnchorPane');
      var ctx = canvas.getContext('2d');

      drawBackground(ctx);

      // North - In lane 1
      vehicles = sessionService.roadMap.junction.getRoad(0).getLane(0).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.length, vehicle.width,
          CANVAS_RADIUS + ((ROAD_RADIUS / 6 * 5) - vehicle.width / 2),
          vehicle.trajectory.location - vehicle.length);
      }

      // North - In lane 2
      vehicles = sessionService.roadMap.junction.getRoad(0).getLane(1).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.length, vehicle.width,
          CANVAS_RADIUS + ((ROAD_RADIUS / 6 * 3) - vehicle.width / 2),
          vehicle.trajectory.location - vehicle.length);
      }

      // North - In lane 3
      vehicles = sessionService.roadMap.junction.getRoad(0).getLane(2).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.length, vehicle.width,
          CANVAS_RADIUS + ((ROAD_RADIUS / 6 * 1) - vehicle.width / 2),
          vehicle.trajectory.location - vehicle.length);
      }

      // North - Out lane 1
      vehicles = sessionService.roadMap.junction.getRoad(0).getLane(3).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.length, vehicle.width,
          CANVAS_RADIUS + (((-1) * ROAD_RADIUS / 6 * 1) - vehicle.width / 2),
          ROAD_LENGTH - vehicle.trajectory.location);
      }

      // North - Out lane 2
      vehicles = sessionService.roadMap.junction.getRoad(0).getLane(4).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.length, vehicle.width,
          CANVAS_RADIUS + (((-1) * ROAD_RADIUS / 6 * 3) - vehicle.width / 2),
          ROAD_LENGTH - vehicle.trajectory.location);
      }

      // North - Out lane 3
      vehicles = sessionService.roadMap.junction.getRoad(0).getLane(5).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.length, vehicle.width,
          CANVAS_RADIUS + (((-1) * ROAD_RADIUS / 6 * 5) - vehicle.width / 2),
          ROAD_LENGTH - vehicle.trajectory.location);
      }

      // East - In lane 1
      vehicles = sessionService.roadMap.junction.getRoad(1).getLane(0).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.width, vehicle.length,
          (2 * CANVAS_RADIUS) - vehicle.trajectory.location,
          CANVAS_RADIUS + ((ROAD_RADIUS / 6 * 5) - vehicle.width / 2));
      }

      // East - In lane 2
      vehicles = sessionService.roadMap.junction.getRoad(1).getLane(1).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.width, vehicle.length,
          (2 * CANVAS_RADIUS) - vehicle.trajectory.location,
          CANVAS_RADIUS + ((ROAD_RADIUS / 6 * 3) - vehicle.width / 2));
      }

      // East - In lane 3
      vehicles = sessionService.roadMap.junction.getRoad(1).getLane(2).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.width, vehicle.length,
          (2 * CANVAS_RADIUS) - vehicle.trajectory.location,
          CANVAS_RADIUS + ((ROAD_RADIUS / 6 * 1) - vehicle.width / 2));
      }

      // East - Out lane 1
      vehicles = sessionService.roadMap.junction.getRoad(1).getLane(3).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.width, vehicle.length,
          CANVAS_RADIUS + ROAD_RADIUS + vehicle.trajectory.location - vehicle.length,
          CANVAS_RADIUS + (((-1) * ROAD_RADIUS / 6 * 1) - vehicle.width / 2));
      }

      // East - Out lane 2
      vehicles = sessionService.roadMap.junction.getRoad(1).getLane(4).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.width, vehicle.length,
          CANVAS_RADIUS + ROAD_RADIUS + vehicle.trajectory.location - vehicle.length,
          CANVAS_RADIUS + (((-1) * ROAD_RADIUS / 6 * 3) - vehicle.width / 2));
      }

      // East - Out lane 3
      vehicles = sessionService.roadMap.junction.getRoad(1).getLane(5).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.width, vehicle.length,
          CANVAS_RADIUS + ROAD_RADIUS + vehicle.trajectory.location - vehicle.length,
          CANVAS_RADIUS + (((-1) * ROAD_RADIUS / 6 * 5) - vehicle.width / 2));
      }

      // South - In lane 1
      vehicles = sessionService.roadMap.junction.getRoad(2).getLane(0).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.length, vehicle.width,
          CANVAS_RADIUS + (((-1) * ROAD_RADIUS / 6 * 5) - vehicle.width / 2),
          (2 * CANVAS_RADIUS) - vehicle.trajectory.location);
      }

      // South - In lane 2
      vehicles = sessionService.roadMap.junction.getRoad(2).getLane(1).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.length, vehicle.width,
          CANVAS_RADIUS + (((-1) * ROAD_RADIUS / 6 * 3) - vehicle.width / 2),
          (2 * CANVAS_RADIUS) - vehicle.trajectory.location);
      }

      // South - In lane 3
      vehicles = sessionService.roadMap.junction.getRoad(2).getLane(2).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.length, vehicle.width,
          CANVAS_RADIUS + (((-1) * ROAD_RADIUS / 6 * 1) - vehicle.width / 2),
          (2 * CANVAS_RADIUS) - vehicle.trajectory.location);
      }

      // South - Out lane 1
      vehicles = sessionService.roadMap.junction.getRoad(2).getLane(3).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.length, vehicle.width,
          CANVAS_RADIUS + ((ROAD_RADIUS / 6 * 1) - vehicle.width / 2),
          CANVAS_RADIUS + ROAD_RADIUS + vehicle.trajectory.location - vehicle.length);
      }

      // South - Out lane 2
      vehicles = sessionService.roadMap.junction.getRoad(2).getLane(4).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.length, vehicle.width,
          CANVAS_RADIUS + ((ROAD_RADIUS / 6 * 3) - vehicle.width / 2),
          CANVAS_RADIUS + ROAD_RADIUS + vehicle.trajectory.location - vehicle.length);
      }

      // South - Out lane 3
      vehicles = sessionService.roadMap.junction.getRoad(2).getLane(5).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.length, vehicle.width,
          CANVAS_RADIUS + ((ROAD_RADIUS / 6 * 5) - vehicle.width / 2),
          CANVAS_RADIUS + ROAD_RADIUS + vehicle.trajectory.location - vehicle.length);
      }

      // West - In lane 1
      vehicles = sessionService.roadMap.junction.getRoad(3).getLane(0).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.width, vehicle.length,
          vehicle.trajectory.location - vehicle.length,
          CANVAS_RADIUS + (((-1) * ROAD_RADIUS / 6 * 5) - vehicle.width / 2));
      }

      // West - In lane 2
      vehicles = sessionService.roadMap.junction.getRoad(3).getLane(1).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.width, vehicle.length,
          vehicle.trajectory.location - vehicle.length,
          CANVAS_RADIUS + (((-1) * ROAD_RADIUS / 6 * 3) - vehicle.width / 2));
      }

      // West - In lane 3
      vehicles = sessionService.roadMap.junction.getRoad(3).getLane(2).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.width, vehicle.length,
          vehicle.trajectory.location - vehicle.length,
          CANVAS_RADIUS + (((-1) * ROAD_RADIUS / 6 * 1) - vehicle.width / 2));
      }

      // West - Out lane 1
      vehicles = sessionService.roadMap.junction.getRoad(3).getLane(3).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.width, vehicle.length,
          ROAD_LENGTH - vehicle.trajectory.location,
          CANVAS_RADIUS + ((ROAD_RADIUS / 6 * 1) - vehicle.width / 2));
      }

      // West - Out lane 2
      vehicles = sessionService.roadMap.junction.getRoad(3).getLane(4).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.width, vehicle.length,
          ROAD_LENGTH - vehicle.trajectory.location,
          CANVAS_RADIUS + ((ROAD_RADIUS / 6 * 3) - vehicle.width / 2));
      }

      // West - Out lane 3
      vehicles = sessionService.roadMap.junction.getRoad(3).getLane(5).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnLane(ctx, vehicle, vehicle.width, vehicle.length,
          ROAD_LENGTH - vehicle.trajectory.location,
          CANVAS_RADIUS + ((ROAD_RADIUS / 6 * 5) - vehicle.width / 2));
      }


      // North - Int lane 1
      vehicles = sessionService.roadMap.junction.intersection.nIntRoad.get(6).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        var radius = ROAD_RADIUS / 6;
        var thetaRad = vehicle.trajectory.location / (radius + vehicle.length / 2);
        drawVehicleOnIntersectionArc(ctx, vehicle, vehicle.length, vehicle.width,
          (CANVAS_RADIUS + (ROAD_RADIUS / 6 * 5)) - vehicle.width / 2, (CANVAS_RADIUS - ROAD_RADIUS) - vehicle.length,
          (-1) * thetaRad * 180 / Math.PI,
          CANVAS_RADIUS + ROAD_RADIUS + vehicle.length / 2, ROAD_LENGTH - vehicle.length / 2);
      }

      // North - Int lane 2
      vehicles = sessionService.roadMap.junction.intersection.nIntRoad.get(7).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnIntersection(ctx, vehicle, vehicle.length, vehicle.width,
          (CANVAS_RADIUS + (ROAD_RADIUS / 6 * 3)) - vehicle.width / 2, ROAD_LENGTH + vehicle.trajectory.location - vehicle.length);
      }

      // North - Int lane 3
      vehicles = sessionService.roadMap.junction.intersection.nIntRoad.get(8).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        var radius = ROAD_RADIUS + ROAD_RADIUS / 6;
        var thetaRad = vehicle.trajectory.location / (radius + vehicle.length / 2);
        drawVehicleOnIntersectionArc(ctx, vehicle, vehicle.length, vehicle.width,
          (CANVAS_RADIUS + (ROAD_RADIUS / 6 * 1)) - vehicle.width / 2, (CANVAS_RADIUS - ROAD_RADIUS) - vehicle.length,
          thetaRad * 180 / Math.PI,
          ROAD_LENGTH - vehicle.length / 2, ROAD_LENGTH - vehicle.length / 2);
      }

      // East - Int lane 1
      vehicles = sessionService.roadMap.junction.intersection.eIntRoad.get(6).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        var radius = ROAD_RADIUS / 6;
        var thetaRad = vehicle.trajectory.location / (radius + vehicle.length / 2);
        drawVehicleOnIntersectionArc(ctx, vehicle, vehicle.width, vehicle.length,
          (CANVAS_RADIUS + ROAD_RADIUS), (CANVAS_RADIUS + (ROAD_RADIUS / 6 * 5)) - vehicle.width / 2,
          (-1) * thetaRad * 180 / Math.PI,
          CANVAS_RADIUS + ROAD_RADIUS + vehicle.length / 2, CANVAS_RADIUS + ROAD_RADIUS + vehicle.length / 2);
      }

      // East - Int lane 2
      vehicles = sessionService.roadMap.junction.intersection.eIntRoad.get(7).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnIntersection(ctx, vehicle, vehicle.width, vehicle.length,
          CANVAS_RADIUS + ROAD_RADIUS - vehicle.trajectory.location, (CANVAS_RADIUS + (ROAD_RADIUS / 6 * 3)) - vehicle.width / 2);
      }

      // East - Int lane 3
      vehicles = sessionService.roadMap.junction.intersection.eIntRoad.get(8).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        var radius = ROAD_RADIUS + ROAD_RADIUS / 6;
        var thetaRad = vehicle.trajectory.location / (radius + vehicle.length / 2);
        drawVehicleOnIntersectionArc(ctx, vehicle, vehicle.width, vehicle.length,
          (CANVAS_RADIUS + ROAD_RADIUS), (CANVAS_RADIUS + (ROAD_RADIUS / 6 * 1)) - vehicle.width / 2,
          thetaRad * 180 / Math.PI,
          CANVAS_RADIUS + ROAD_RADIUS + vehicle.length / 2, ROAD_LENGTH - vehicle.length / 2);
      }

      // South - Int lane 1
      vehicles = sessionService.roadMap.junction.intersection.sIntRoad.get(6).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        var radius = ROAD_RADIUS / 6;
        var thetaRad = vehicle.trajectory.location / (radius + vehicle.length / 2);
        drawVehicleOnIntersectionArc(ctx, vehicle, vehicle.length, vehicle.width,
          (CANVAS_RADIUS - (ROAD_RADIUS / 6 * 5)) - vehicle.width / 2, (CANVAS_RADIUS + ROAD_RADIUS),
          (-1) * thetaRad * 180 / Math.PI,
          ROAD_LENGTH - vehicle.length / 2, CANVAS_RADIUS + ROAD_RADIUS + vehicle.length / 2);
      }

      // South - Int lane 2
      vehicles = sessionService.roadMap.junction.intersection.sIntRoad.get(7).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnIntersection(ctx, vehicle, vehicle.length, vehicle.width,
          (CANVAS_RADIUS - (ROAD_RADIUS / 6 * 3)) - vehicle.width / 2, CANVAS_RADIUS + ROAD_RADIUS - vehicle.trajectory.location);
      }

      // South - Int lane 3
      vehicles = sessionService.roadMap.junction.intersection.sIntRoad.get(8).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        var radius = ROAD_RADIUS + ROAD_RADIUS / 6;
        var thetaRad = vehicle.trajectory.location / (radius + vehicle.length / 2);
        drawVehicleOnIntersectionArc(ctx, vehicle, vehicle.length, vehicle.width,
          (CANVAS_RADIUS - (ROAD_RADIUS / 6 * 1)) - vehicle.width / 2, (CANVAS_RADIUS + ROAD_RADIUS),
          thetaRad * 180 / Math.PI,
          CANVAS_RADIUS + ROAD_RADIUS + vehicle.length / 2, CANVAS_RADIUS + ROAD_RADIUS + vehicle.length / 2);
      }

      // West - Int lane 1
      vehicles = sessionService.roadMap.junction.intersection.wIntRoad.get(6).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        var radius = ROAD_RADIUS / 6;
        var thetaRad = vehicle.trajectory.location / (radius + vehicle.length / 2);
        drawVehicleOnIntersectionArc(ctx, vehicle, vehicle.width, vehicle.length,
          (ROAD_LENGTH) - vehicle.length, (CANVAS_RADIUS - (ROAD_RADIUS / 6 * 5)) - vehicle.width / 2,
          (-1) * thetaRad * 180 / Math.PI,
          ROAD_LENGTH - vehicle.length / 2, ROAD_LENGTH - vehicle.length / 2);
      }

      // West - Int lane 2
      vehicles = sessionService.roadMap.junction.intersection.wIntRoad.get(7).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        drawVehicleOnIntersection(ctx, vehicle, vehicle.width, vehicle.length,
          ROAD_LENGTH + vehicle.trajectory.location - vehicle.length, (CANVAS_RADIUS - (ROAD_RADIUS / 6 * 3)) - vehicle.width / 2);
      }

      // West - Int lane 3
      vehicles = sessionService.roadMap.junction.intersection.wIntRoad.get(8).vehicleList;
      iter = vehicles.length;
      while (iter--) {
        var vehicle = vehicles[iter];
        var radius = ROAD_RADIUS + ROAD_RADIUS / 6;
        var thetaRad = vehicle.trajectory.location / (radius + vehicle.length / 2);
        drawVehicleOnIntersectionArc(ctx, vehicle, vehicle.width, vehicle.length,
          (ROAD_LENGTH) - vehicle.length, (CANVAS_RADIUS - (ROAD_RADIUS / 6 * 1)) - vehicle.width / 2,
          thetaRad * 180 / Math.PI,
          ROAD_LENGTH - vehicle.length / 2, CANVAS_RADIUS + ROAD_RADIUS + vehicle.length / 2);
      }

      drawTrafficLight(ctx, CANVAS_RADIUS + (ROAD_RADIUS / 6 * 5), ROAD_LENGTH - (1.5 * TRAFFIC_LIGHT_RADIUS), sessionService.northLane1TrafficLight.state);
      drawTrafficLight(ctx, CANVAS_RADIUS + (ROAD_RADIUS / 6 * 3), ROAD_LENGTH - (1.5 * TRAFFIC_LIGHT_RADIUS), sessionService.northLane2TrafficLight.state);
      drawTrafficLight(ctx, CANVAS_RADIUS + (ROAD_RADIUS / 6 * 1), ROAD_LENGTH - (1.5 * TRAFFIC_LIGHT_RADIUS), sessionService.northLane3TrafficLight.state);

      drawTrafficLight(ctx, CANVAS_RADIUS + ROAD_RADIUS + (1.5 * TRAFFIC_LIGHT_RADIUS), CANVAS_RADIUS + (ROAD_RADIUS / 6 * 5), sessionService.eastLane1TrafficLight.state);
      drawTrafficLight(ctx, CANVAS_RADIUS + ROAD_RADIUS + (1.5 * TRAFFIC_LIGHT_RADIUS), CANVAS_RADIUS + (ROAD_RADIUS / 6 * 3), sessionService.eastLane2TrafficLight.state);
      drawTrafficLight(ctx, CANVAS_RADIUS + ROAD_RADIUS + (1.5 * TRAFFIC_LIGHT_RADIUS), CANVAS_RADIUS + (ROAD_RADIUS / 6 * 1), sessionService.eastLane3TrafficLight.state);

      drawTrafficLight(ctx, CANVAS_RADIUS - (ROAD_RADIUS / 6 * 5), CANVAS_RADIUS + ROAD_RADIUS + (1.5 * TRAFFIC_LIGHT_RADIUS), sessionService.southLane1TrafficLight.state);
      drawTrafficLight(ctx, CANVAS_RADIUS - (ROAD_RADIUS / 6 * 3), CANVAS_RADIUS + ROAD_RADIUS + (1.5 * TRAFFIC_LIGHT_RADIUS), sessionService.southLane2TrafficLight.state);
      drawTrafficLight(ctx, CANVAS_RADIUS - (ROAD_RADIUS / 6 * 1), CANVAS_RADIUS + ROAD_RADIUS + (1.5 * TRAFFIC_LIGHT_RADIUS), sessionService.southLane3TrafficLight.state);

      drawTrafficLight(ctx, ROAD_LENGTH - (1.5 * TRAFFIC_LIGHT_RADIUS), CANVAS_RADIUS - (ROAD_RADIUS / 6 * 5), sessionService.westLane1TrafficLight.state);
      drawTrafficLight(ctx, ROAD_LENGTH - (1.5 * TRAFFIC_LIGHT_RADIUS), CANVAS_RADIUS - (ROAD_RADIUS / 6 * 3), sessionService.westLane2TrafficLight.state);
      drawTrafficLight(ctx, ROAD_LENGTH - (1.5 * TRAFFIC_LIGHT_RADIUS), CANVAS_RADIUS - (ROAD_RADIUS / 6 * 1), sessionService.westLane3TrafficLight.state);

    }, CANVAS_REFRESH_INTERVAL);

    window.onload = function () {
      var canvas: any = document.querySelector('#backgroundCanvasAnchorPane');
      var ctx = canvas.getContext('2d');
      setBackgroundLayout(canvas);
      drawBackground(ctx);
    };

  }

  ngOnInit() {
  }

}
