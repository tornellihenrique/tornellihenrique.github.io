export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface Pose {
  position: Vec3;
  rotation: Vec3;
}

export function vec3(x = 0, y = 0, z = 0): Vec3 {
  return { x, y, z };
}

export function createPose(): Pose {
  return { position: vec3(), rotation: vec3() };
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function addPose(target: Pose, other: Pose): void {
  target.position.x += other.position.x;
  target.position.y += other.position.y;
  target.position.z += other.position.z;
  target.rotation.x += other.rotation.x;
  target.rotation.y += other.rotation.y;
  target.rotation.z += other.rotation.z;
}

export function rotateByEuler(point: Vec3, rotation: Vec3): Vec3 {
  const cosRoll = Math.cos(rotation.z);
  const sinRoll = Math.sin(rotation.z);
  const rolledX = point.x * cosRoll - point.y * sinRoll;
  const rolledY = point.x * sinRoll + point.y * cosRoll;

  const cosPitch = Math.cos(rotation.x);
  const sinPitch = Math.sin(rotation.x);
  const pitchedY = rolledY * cosPitch - point.z * sinPitch;
  const pitchedZ = rolledY * sinPitch + point.z * cosPitch;

  const cosYaw = Math.cos(rotation.y);
  const sinYaw = Math.sin(rotation.y);
  return {
    x: rolledX * cosYaw + pitchedZ * sinYaw,
    y: pitchedY,
    z: -rolledX * sinYaw + pitchedZ * cosYaw,
  };
}

export function transformPoint(point: Vec3, pose: Pose): Vec3 {
  const rotated = rotateByEuler(point, pose.rotation);
  return {
    x: rotated.x + pose.position.x,
    y: rotated.y + pose.position.y,
    z: rotated.z + pose.position.z,
  };
}
