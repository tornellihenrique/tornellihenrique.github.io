import type { MotionContext, MotionLayer } from './layers';
import { addPose, createPose, type Pose } from './math';

export class MotionStack {
  constructor(readonly layers: readonly MotionLayer[]) {}

  evaluate(context: MotionContext): Pose {
    const holder = createPose();
    for (const layer of this.layers) {
      addPose(holder, layer.evaluate(context));
    }
    return holder;
  }
}
