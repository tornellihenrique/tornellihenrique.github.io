import { vec3, type Vec3 } from './math';

export type Segment = readonly [Vec3, Vec3];

interface Box {
  center: Vec3;
  size: Vec3;
}

const BOX_EDGES: readonly (readonly [number, number])[] = [
  [0, 1], [1, 3], [3, 2], [2, 0],
  [4, 5], [5, 7], [7, 6], [6, 4],
  [0, 4], [1, 5], [2, 6], [3, 7],
];

const PARTS: readonly Box[] = [
  { center: vec3(0, 0, 0.1), size: vec3(0.042, 0.07, 0.34) },
  { center: vec3(0, 0.004, 0.4), size: vec3(0.04, 0.052, 0.26) },
  { center: vec3(0, 0.012, 0.62), size: vec3(0.015, 0.015, 0.18) },
  { center: vec3(0, 0.012, 0.73), size: vec3(0.024, 0.024, 0.05) },
  { center: vec3(0, -0.004, -0.16), size: vec3(0.034, 0.058, 0.18) },
  { center: vec3(0, -0.082, 0.0), size: vec3(0.03, 0.095, 0.04) },
  { center: vec3(0, -0.1, 0.15), size: vec3(0.034, 0.125, 0.055) },
  { center: vec3(0, 0.043, 0.2), size: vec3(0.024, 0.012, 0.46) },
  { center: vec3(0, 0.058, 0.13), size: vec3(0.034, 0.02, 0.07) },
];

const SIGHT_WINDOW_CENTER = vec3(0, 0.097, 0.13);
const SIGHT_WINDOW_WIDTH = 0.05;
const SIGHT_WINDOW_HEIGHT = 0.044;

export const MUZZLE = vec3(0, 0.012, 0.76);

function boxCorners({ center, size }: Box): Vec3[] {
  const corners: Vec3[] = [];
  for (let index = 0; index < 8; index += 1) {
    corners.push({
      x: center.x + (index & 1 ? 0.5 : -0.5) * size.x,
      y: center.y + (index & 2 ? 0.5 : -0.5) * size.y,
      z: center.z + (index & 4 ? 0.5 : -0.5) * size.z,
    });
  }
  return corners;
}

function buildSightWindow(): Segment[] {
  const { x, y, z } = SIGHT_WINDOW_CENTER;
  const halfWidth = SIGHT_WINDOW_WIDTH / 2;
  const halfHeight = SIGHT_WINDOW_HEIGHT / 2;
  const topLeft = vec3(x - halfWidth, y + halfHeight, z);
  const topRight = vec3(x + halfWidth, y + halfHeight, z);
  const bottomLeft = vec3(x - halfWidth, y - halfHeight, z);
  const bottomRight = vec3(x + halfWidth, y - halfHeight, z);
  const baseLeft = vec3(x - halfWidth, 0.068, z);
  const baseRight = vec3(x + halfWidth, 0.068, z);

  return [
    [topLeft, topRight],
    [topRight, bottomRight],
    [bottomRight, bottomLeft],
    [bottomLeft, topLeft],
    [bottomLeft, baseLeft],
    [bottomRight, baseRight],
  ];
}

export function buildRifleSegments(): Segment[] {
  const segments = PARTS.flatMap((part) => {
    const corners = boxCorners(part);
    return BOX_EDGES.map(([from, to]): Segment => [corners[from], corners[to]]);
  });
  return [...segments, ...buildSightWindow()];
}
