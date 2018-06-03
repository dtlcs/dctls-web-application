import {Injectable} from '@angular/core';

@Injectable()
export class ControlDrawService {
    private canvasRadius = 350.0;
    private canvasLength = this.canvasRadius * 2;
    private roadRadius = 130.0;
    private roadLength = this.canvasRadius - this.roadRadius;
    private trafficLightRadius = 4.0;

    constructor() {

    }

    setBackgroundLayout(canvas: any) {
        canvas.width = this.canvasLength;
        canvas.height = this.canvasLength;
    }

    drawBackground(ctx: any) {
        // Road surface
        ctx.fillStyle = 'rgb(46,52,54)';
        ctx.fillRect(this.roadLength, 0, this.roadRadius * 2, this.canvasRadius * 2);
        ctx.fillRect(0, this.roadLength, this.canvasRadius * 2, this.roadRadius * 2);

        // Boundary lines
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = 'rgb(0, 0, 0)';
        ctx.beginPath();
        ctx.lineTo(this.canvasRadius + this.roadRadius, 0.0);
        ctx.lineTo(this.canvasRadius + this.roadRadius, this.roadLength);
        ctx.lineTo(2 * this.canvasRadius, this.roadLength);
        ctx.lineTo(2 * this.canvasRadius, this.canvasRadius + this.roadRadius);
        ctx.lineTo(this.canvasRadius + this.roadRadius, this.canvasRadius + this.roadRadius);
        ctx.lineTo(this.canvasRadius + this.roadRadius, 2 * this.canvasRadius);
        ctx.lineTo(this.roadLength, 2 * this.canvasRadius);
        ctx.lineTo(this.roadLength, this.canvasRadius + this.roadRadius);
        ctx.lineTo(0.0, this.canvasRadius + this.roadRadius);
        ctx.lineTo(0.0, this.roadLength);
        ctx.lineTo(this.roadLength, this.roadLength);
        ctx.lineTo(this.roadLength, 0.0);
        ctx.stroke();

        // Mid lines
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgb(219,219,217)';
        ctx.beginPath();
        ctx.moveTo(this.canvasRadius, 0);
        ctx.lineTo(this.canvasRadius, 2 * this.canvasRadius);
        ctx.moveTo(0, this.canvasRadius);
        ctx.lineTo(2 * this.canvasRadius, this.canvasRadius);
        ctx.stroke();

        // Mark intersection bounds
        ctx.beginPath();
        // Left
        ctx.moveTo(this.roadLength, this.roadLength);
        ctx.lineTo(this.roadLength, this.canvasRadius + this.roadRadius);
        // Right
        ctx.moveTo(this.canvasRadius + this.roadRadius, this.roadLength);
        ctx.lineTo(this.canvasRadius + this.roadRadius, this.canvasRadius + this.roadRadius);
        // Top
        ctx.moveTo(this.roadLength, this.roadLength);
        ctx.lineTo(this.canvasRadius + this.roadRadius, this.roadLength);
        // Bottom
        ctx.moveTo(this.roadLength, this.canvasRadius + this.roadRadius);
        ctx.lineTo(this.canvasRadius + this.roadRadius, this.canvasRadius + this.roadRadius);
        ctx.stroke();

        // Mark lines
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgb(219,219,217)';
        ctx.setLineDash([5, 13]);
        ctx.beginPath();
        // Left mid vertical 1
        ctx.moveTo(this.canvasRadius - this.roadRadius / 3, 0);
        ctx.lineTo(this.canvasRadius - this.roadRadius / 3, 2 * this.canvasRadius);
        // Left mid vertical 2
        ctx.moveTo(this.canvasRadius - this.roadRadius / 3 * 2, 0);
        ctx.lineTo(this.canvasRadius - this.roadRadius / 3 * 2, 2 * this.canvasRadius);
        // Right mid vertical 1
        ctx.moveTo(this.canvasRadius + this.roadRadius / 3, 0);
        ctx.lineTo(this.canvasRadius + this.roadRadius / 3, 2 * this.canvasRadius);
        // Right mid vertical 2
        ctx.moveTo(this.canvasRadius + this.roadRadius / 3 * 2, 0);
        ctx.lineTo(this.canvasRadius + this.roadRadius / 3 * 2, 2 * this.canvasRadius);
        // Top mid horizontal 1
        ctx.moveTo(0, this.canvasRadius - this.roadRadius / 3);
        ctx.lineTo(2 * this.canvasRadius, this.canvasRadius - this.roadRadius / 3);
        // Top mid horizontal 2
        ctx.moveTo(0, this.canvasRadius - this.roadRadius / 3 * 2);
        ctx.lineTo(2 * this.canvasRadius, this.canvasRadius - this.roadRadius / 3 * 2);
        // Down mid horizontal 1
        ctx.moveTo(0, this.canvasRadius + this.roadRadius / 3);
        ctx.lineTo(2 * this.canvasRadius, this.canvasRadius + this.roadRadius / 3);
        // Down mid horizontal 2
        ctx.moveTo(0, this.canvasRadius + this.roadRadius / 3 * 2);
        ctx.lineTo(2 * this.canvasRadius, this.canvasRadius + this.roadRadius / 3 * 2);
        ctx.stroke();
        ctx.setLineDash([]);
    }
}
