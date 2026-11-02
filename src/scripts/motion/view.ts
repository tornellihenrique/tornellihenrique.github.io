import type { MotionLayer } from './layers';
import { rotateByEuler, transformPoint, vec3, type Pose, type Vec3 } from './math';
import { buildRifleSegments, MUZZLE, type Segment } from './rifle';

const NEAR_PLANE = 0.06;
const WALL_DISTANCE = 15;
const WALL_HALF_WIDTH = 8;
const WALL_TOP = 5;
const GROUND_HEIGHT = -1.65;
const HIT_LIFETIME_SECONDS = 2.6;
const MAX_HITS = 40;

const COLOR_ACCENT = '198, 241, 53';
const COLOR_WORLD = '150, 156, 166';
const COLOR_TEXT = '160, 162, 169';

interface Hit {
  position: Vec3;
  age: number;
}

function buildWorldSegments(): Segment[] {
  const segments: Segment[] = [];

  for (let x = -12; x <= 12; x += 2) {
    segments.push([vec3(x, GROUND_HEIGHT, 1), vec3(x, GROUND_HEIGHT, WALL_DISTANCE)]);
  }
  for (let z = 1; z <= WALL_DISTANCE; z += 2) {
    segments.push([vec3(-12, GROUND_HEIGHT, z), vec3(12, GROUND_HEIGHT, z)]);
  }
  for (let x = -WALL_HALF_WIDTH; x <= WALL_HALF_WIDTH; x += 2) {
    segments.push([vec3(x, GROUND_HEIGHT, WALL_DISTANCE), vec3(x, WALL_TOP, WALL_DISTANCE)]);
  }
  for (let y = GROUND_HEIGHT; y <= WALL_TOP; y += 2) {
    segments.push([vec3(-WALL_HALF_WIDTH, y, WALL_DISTANCE), vec3(WALL_HALF_WIDTH, y, WALL_DISTANCE)]);
  }
  return segments;
}

export class MotionView {
  private readonly context: CanvasRenderingContext2D;
  private readonly rifle = buildRifleSegments();
  private readonly world = buildWorldSegments();
  private readonly hits: Hit[] = [];

  private width = 0;
  private height = 0;
  private focalLength = 1;
  private flashSeconds = 0;

  constructor(private readonly canvas: HTMLCanvasElement) {
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Canvas 2D is not available.');
    }
    this.context = context;
  }

  resize(width: number, height: number, pixelRatio: number): void {
    this.width = width;
    this.height = height;
    this.focalLength = Math.min(width, height * 1.5) * 0.74;
    this.canvas.width = Math.round(width * pixelRatio);
    this.canvas.height = Math.round(height * pixelRatio);
    this.context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  registerShot(holder: Pose, viewRotation: Vec3): void {
    const forward = rotateByEuler(rotateByEuler(vec3(0, 0, 1), holder.rotation), viewRotation);
    if (forward.z <= 0) {
      return;
    }

    const distance = WALL_DISTANCE / forward.z;
    this.hits.push({
      position: vec3(forward.x * distance, forward.y * distance, WALL_DISTANCE),
      age: 0,
    });
    if (this.hits.length > MAX_HITS) {
      this.hits.shift();
    }
    this.flashSeconds = 0.05;
  }

  draw(holder: Pose, viewRotation: Vec3, layers: readonly MotionLayer[], aimAlpha: number, deltaSeconds: number): void {
    const { context } = this;
    context.clearRect(0, 0, this.width, this.height);

    this.drawWorld(viewRotation);
    this.drawHits(viewRotation, deltaSeconds);
    this.drawCrosshair(aimAlpha);
    this.drawRifle(holder);
    this.drawMuzzleFlash(holder, deltaSeconds);
    this.drawStackReadout(layers);
  }

  private toView(point: Vec3, viewRotation: Vec3): Vec3 {
    const inverse = vec3(-viewRotation.x, -viewRotation.y, -viewRotation.z);
    const yawOnly = rotateByEuler(point, vec3(0, inverse.y, 0));
    return rotateByEuler(yawOnly, vec3(inverse.x, 0, 0));
  }

  private project(point: Vec3): { x: number; y: number } {
    const scale = this.focalLength / point.z;
    return {
      x: this.width / 2 + point.x * scale,
      y: this.height / 2 - point.y * scale,
    };
  }

  private strokeSegment(from: Vec3, to: Vec3): void {
    if (from.z < NEAR_PLANE && to.z < NEAR_PLANE) {
      return;
    }

    let start = from;
    let end = to;
    if (start.z < NEAR_PLANE || end.z < NEAR_PLANE) {
      const ratio = (NEAR_PLANE - start.z) / (end.z - start.z);
      const clipped = vec3(
        start.x + (end.x - start.x) * ratio,
        start.y + (end.y - start.y) * ratio,
        NEAR_PLANE,
      );
      if (start.z < NEAR_PLANE) {
        start = clipped;
      } else {
        end = clipped;
      }
    }

    const projectedStart = this.project(start);
    const projectedEnd = this.project(end);
    this.context.moveTo(projectedStart.x, projectedStart.y);
    this.context.lineTo(projectedEnd.x, projectedEnd.y);
  }

  private drawWorld(viewRotation: Vec3): void {
    const { context } = this;
    context.beginPath();
    for (const [from, to] of this.world) {
      this.strokeSegment(this.toView(from, viewRotation), this.toView(to, viewRotation));
    }
    context.strokeStyle = `rgba(${COLOR_WORLD}, 0.2)`;
    context.lineWidth = 1;
    context.stroke();
  }

  private drawHits(viewRotation: Vec3, deltaSeconds: number): void {
    const { context } = this;
    for (const hit of this.hits) {
      hit.age += deltaSeconds;
    }
    while (this.hits.length > 0 && this.hits[0].age > HIT_LIFETIME_SECONDS) {
      this.hits.shift();
    }

    for (const hit of this.hits) {
      const point = this.toView(hit.position, viewRotation);
      if (point.z <= NEAR_PLANE) {
        continue;
      }
      const { x, y } = this.project(point);
      context.strokeStyle = `rgba(${COLOR_ACCENT}, ${1 - hit.age / HIT_LIFETIME_SECONDS})`;
      context.lineWidth = 1.5;
      context.beginPath();
      context.moveTo(x - 4, y - 4);
      context.lineTo(x + 4, y + 4);
      context.moveTo(x + 4, y - 4);
      context.lineTo(x - 4, y + 4);
      context.stroke();
    }
  }

  private drawCrosshair(aimAlpha: number): void {
    const { context } = this;
    const opacity = 1 - aimAlpha;
    if (opacity <= 0.02) {
      return;
    }

    const centerX = this.width / 2;
    const centerY = this.height / 2;
    context.strokeStyle = `rgba(236, 235, 230, ${opacity * 0.75})`;
    context.lineWidth = 1.5;
    context.beginPath();
    for (const [x, y] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      context.moveTo(centerX + x * 7, centerY + y * 7);
      context.lineTo(centerX + x * 15, centerY + y * 15);
    }
    context.stroke();
  }

  private drawRifle(holder: Pose): void {
    const { context } = this;
    context.beginPath();
    for (const [from, to] of this.rifle) {
      this.strokeSegment(transformPoint(from, holder), transformPoint(to, holder));
    }
    context.strokeStyle = `rgba(${COLOR_ACCENT}, 0.95)`;
    context.lineWidth = 1.4;
    context.lineJoin = 'round';
    context.stroke();
  }

  private drawMuzzleFlash(holder: Pose, deltaSeconds: number): void {
    if (this.flashSeconds <= 0) {
      return;
    }
    this.flashSeconds -= deltaSeconds;

    const { context } = this;
    const muzzle = transformPoint(MUZZLE, holder);
    const { x, y } = this.project(muzzle);
    context.strokeStyle = 'rgba(255, 244, 200, 0.95)';
    context.lineWidth = 2;
    context.beginPath();
    for (let index = 0; index < 8; index += 1) {
      const angle = (index / 8) * Math.PI * 2 + Math.random() * 0.4;
      const length = 12 + Math.random() * 26;
      context.moveTo(x + Math.cos(angle) * 5, y + Math.sin(angle) * 5);
      context.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
    }
    context.stroke();
  }

  private drawStackReadout(layers: readonly MotionLayer[]): void {
    const { context } = this;
    const left = 16;
    const rowHeight = 18;
    const barLeft = left + 62;
    const barWidth = 64;
    let top = 26;

    context.font = "12px 'JetBrains Mono Variable', ui-monospace, monospace";
    context.textBaseline = 'middle';
    context.fillStyle = `rgba(${COLOR_TEXT}, 1)`;
    context.fillText('MOTION STACK', left, top);

    for (const layer of layers) {
      top += rowHeight;
      context.fillStyle = `rgba(${COLOR_TEXT}, 1)`;
      context.fillText(layer.name, left, top);
      context.fillStyle = `rgba(${COLOR_WORLD}, 0.2)`;
      context.fillRect(barLeft, top - 3, barWidth, 6);
      context.fillStyle = `rgba(${COLOR_ACCENT}, 1)`;
      context.fillRect(barLeft, top - 3, barWidth * layer.level, 6);
    }
  }
}
