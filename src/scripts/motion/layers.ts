import { clamp, createPose, type Pose } from './math';
import { Spring } from './spring';

export interface MotionContext {
  deltaSeconds: number;
  timeSeconds: number;
  lookX: number;
  lookY: number;
  lookVelocityX: number;
  lookVelocityY: number;
  aimAlpha: number;
  firedThisFrame: boolean;
}

export interface MotionLayer {
  readonly name: string;
  readonly level: number;
  evaluate(context: MotionContext): Pose;
}

const HIP_POSITION = { x: 0.105, y: -0.135, z: 0.19 };
const HIP_ROTATION = { x: 0.02, y: -0.09, z: -0.05 };
const AIM_POSITION = { x: 0, y: -0.097, z: 0.115 };

export class OffsetLayer implements MotionLayer {
  readonly name = 'Offset';
  level = 0;

  evaluate(context: MotionContext): Pose {
    const pose = createPose();
    pose.position = { ...HIP_POSITION };
    pose.rotation = { ...HIP_ROTATION };
    this.level = 1 - context.aimAlpha;
    return pose;
  }
}

export class AimLayer implements MotionLayer {
  readonly name = 'Aim';
  level = 0;

  evaluate(context: MotionContext): Pose {
    const alpha = context.aimAlpha;
    const pose = createPose();
    pose.position.x = (AIM_POSITION.x - HIP_POSITION.x) * alpha;
    pose.position.y = (AIM_POSITION.y - HIP_POSITION.y) * alpha;
    pose.position.z = (AIM_POSITION.z - HIP_POSITION.z) * alpha;
    pose.rotation.x = -HIP_ROTATION.x * alpha;
    pose.rotation.y = -HIP_ROTATION.y * alpha;
    pose.rotation.z = -HIP_ROTATION.z * alpha;
    this.level = alpha;
    return pose;
  }
}

export class IdleLayer implements MotionLayer {
  readonly name = 'Idle';
  level = 0;

  evaluate(context: MotionContext): Pose {
    const weight = 1 - context.aimAlpha * 0.75;
    const breath = Math.sin(context.timeSeconds * 1.7);
    const drift = Math.sin(context.timeSeconds * 0.9 + 1.1);

    const pose = createPose();
    pose.position.y = breath * 0.0035 * weight;
    pose.position.x = drift * 0.0018 * weight;
    pose.rotation.x = breath * 0.0045 * weight;
    pose.rotation.z = drift * 0.006 * weight;
    this.level = (breath * 0.5 + 0.5) * 0.3 * weight;
    return pose;
  }
}

export class SwayLayer implements MotionLayer {
  readonly name = 'Sway';
  level = 0;

  private readonly yaw = new Spring(110, 15);
  private readonly pitch = new Spring(110, 15);
  private readonly roll = new Spring(70, 11);

  evaluate(context: MotionContext): Pose {
    const weight = 1 - context.aimAlpha * 0.7;
    const targetYaw = clamp(-context.lookVelocityX * 0.1, -0.16, 0.16);
    const targetPitch = clamp(context.lookVelocityY * 0.08, -0.12, 0.12);

    const yaw = this.yaw.step(targetYaw, context.deltaSeconds);
    const pitch = this.pitch.step(targetPitch, context.deltaSeconds);
    const roll = this.roll.step(targetYaw * 1.1, context.deltaSeconds);

    const pose = createPose();
    pose.rotation.x = (pitch + context.lookY * 0.05) * weight;
    pose.rotation.y = (yaw + context.lookX * 0.08) * weight;
    pose.rotation.z = roll * weight;
    pose.position.x = yaw * 0.07 * weight;
    pose.position.y = pitch * -0.05 * weight;
    this.level = clamp((Math.abs(yaw) + Math.abs(pitch)) * 7, 0, 1);
    return pose;
  }
}

export class RecoilLayer implements MotionLayer {
  readonly name = 'Recoil';
  level = 0;

  private readonly back = new Spring(240, 19);
  private readonly pitch = new Spring(170, 15);
  private readonly yaw = new Spring(170, 15);
  private readonly roll = new Spring(130, 12);

  evaluate(context: MotionContext): Pose {
    if (context.firedThisFrame) {
      const strength = 1 - context.aimAlpha * 0.45;
      this.back.kick(-1.05 * strength);
      this.pitch.kick((1.5 + Math.random() * 0.8) * strength);
      this.yaw.kick((Math.random() - 0.5) * 1.3 * strength);
      this.roll.kick((Math.random() - 0.5) * 2.4 * strength);
    }

    const back = this.back.step(0, context.deltaSeconds);
    const pitch = this.pitch.step(0, context.deltaSeconds);
    const yaw = this.yaw.step(0, context.deltaSeconds);
    const roll = this.roll.step(0, context.deltaSeconds);

    const pose = createPose();
    pose.position.z = back;
    pose.position.y = pitch * 0.045;
    pose.rotation.x = -pitch;
    pose.rotation.y = yaw;
    pose.rotation.z = roll;
    this.level = clamp(Math.abs(back) * 42, 0, 1);
    return pose;
  }
}
