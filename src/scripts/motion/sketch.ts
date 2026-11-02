import { AimLayer, IdleLayer, OffsetLayer, RecoilLayer, SwayLayer, type MotionContext } from './layers';
import { clamp, vec3 } from './math';
import { Spring } from './spring';
import { MotionStack } from './stack';
import { MotionView } from './view';

const SECONDS_BETWEEN_SHOTS = 0.1;
const MAX_DELTA_SECONDS = 1 / 30;
const AUTOPILOT_DELAY_SECONDS = 2.5;

interface SketchControls {
  fireButton: HTMLButtonElement;
  aimButton: HTMLButtonElement;
}

class AutoPilot {
  look(timeSeconds: number): { x: number; y: number } {
    return {
      x: Math.sin(timeSeconds * 0.55) * 0.55,
      y: Math.sin(timeSeconds * 0.83 + 1) * 0.28,
    };
  }

  isAiming(timeSeconds: number): boolean {
    return timeSeconds % 9 > 5;
  }

  isFiring(timeSeconds: number): boolean {
    const phase = timeSeconds % 3;
    return phase > 2.1 && phase < 2.6;
  }
}

export function startMotionSketch(canvas: HTMLCanvasElement, controls: SketchControls): void {
  const view = new MotionView(canvas);
  const stack = new MotionStack([
    new OffsetLayer(),
    new AimLayer(),
    new IdleLayer(),
    new SwayLayer(),
    new RecoilLayer(),
  ]);
  const autoPilot = new AutoPilot();
  const aimSpring = new Spring(150, 24);
  const viewYaw = new Spring(60, 14);
  const viewPitch = new Spring(60, 14);

  const pointer = { x: 0, y: 0 };
  const smoothedLook = { x: 0, y: 0 };
  let isFiring = false;
  let isAiming = false;
  let lastInputSeconds = -AUTOPILOT_DELAY_SECONDS;
  let shotCooldown = 0;
  let timeSeconds = 0;
  let lastFrameMilliseconds = 0;
  let frameRequest = 0;

  const noteInput = (): void => {
    lastInputSeconds = timeSeconds;
  };

  const renderFrame = (deltaSeconds: number): void => {
    timeSeconds += deltaSeconds;
    const isAutoPilot = timeSeconds - lastInputSeconds > AUTOPILOT_DELAY_SECONDS;
    const target = isAutoPilot ? autoPilot.look(timeSeconds) : pointer;
    const wantsFire = isAutoPilot ? autoPilot.isFiring(timeSeconds) : isFiring;
    const wantsAim = isAutoPilot ? autoPilot.isAiming(timeSeconds) : isAiming;

    const previousX = smoothedLook.x;
    const previousY = smoothedLook.y;
    const smoothing = 1 - Math.exp(-deltaSeconds * 12);
    smoothedLook.x += (target.x - smoothedLook.x) * smoothing;
    smoothedLook.y += (target.y - smoothedLook.y) * smoothing;

    shotCooldown = Math.max(0, shotCooldown - deltaSeconds);
    const firedThisFrame = wantsFire && shotCooldown === 0;
    if (firedThisFrame) {
      shotCooldown = SECONDS_BETWEEN_SHOTS;
    }

    const aimAlpha = clamp(aimSpring.step(wantsAim ? 1 : 0, deltaSeconds), 0, 1);
    const context: MotionContext = {
      deltaSeconds,
      timeSeconds,
      lookX: smoothedLook.x,
      lookY: smoothedLook.y,
      lookVelocityX: (smoothedLook.x - previousX) / Math.max(deltaSeconds, 1e-3),
      lookVelocityY: (smoothedLook.y - previousY) / Math.max(deltaSeconds, 1e-3),
      aimAlpha,
      firedThisFrame,
    };

    const holder = stack.evaluate(context);
    const viewRotation = vec3(
      viewPitch.step(-smoothedLook.y * 0.09, deltaSeconds),
      viewYaw.step(smoothedLook.x * 0.16, deltaSeconds),
      0,
    );

    if (firedThisFrame) {
      view.registerShot(holder, viewRotation);
    }
    view.draw(holder, viewRotation, stack.layers, aimAlpha, deltaSeconds);
  };

  const tick = (nowMilliseconds: number): void => {
    const deltaSeconds = lastFrameMilliseconds
      ? Math.min((nowMilliseconds - lastFrameMilliseconds) / 1000, MAX_DELTA_SECONDS)
      : MAX_DELTA_SECONDS;
    lastFrameMilliseconds = nowMilliseconds;
    renderFrame(deltaSeconds);
    frameRequest = requestAnimationFrame(tick);
  };

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const start = (): void => {
    if (frameRequest === 0) {
      lastFrameMilliseconds = 0;
      frameRequest = requestAnimationFrame(tick);
    }
  };

  const stop = (): void => {
    cancelAnimationFrame(frameRequest);
    frameRequest = 0;
  };

  const resize = (): void => {
    const bounds = canvas.getBoundingClientRect();
    view.resize(bounds.width, bounds.height, Math.min(window.devicePixelRatio, 2));
    if (prefersReducedMotion) {
      renderFrame(MAX_DELTA_SECONDS);
    }
  };

  new ResizeObserver(resize).observe(canvas);
  resize();

  if (prefersReducedMotion) {
    return;
  }

  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      start();
    } else {
      stop();
    }
  }).observe(canvas);

  canvas.addEventListener('pointermove', (event) => {
    const bounds = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    pointer.y = -(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
    noteInput();
  });
  canvas.addEventListener('pointerdown', (event) => {
    if (event.button === 2) {
      isAiming = true;
    } else {
      isFiring = true;
    }
    noteInput();
  });
  window.addEventListener('pointerup', () => {
    isFiring = false;
    isAiming = false;
  });
  canvas.addEventListener('contextmenu', (event) => event.preventDefault());

  const pressAndHold = (button: HTMLButtonElement, setActive: (active: boolean) => void): void => {
    button.addEventListener('pointerdown', () => {
      setActive(true);
      noteInput();
    });
    button.addEventListener('pointerup', () => setActive(false));
    button.addEventListener('pointerleave', () => setActive(false));
    button.addEventListener('keydown', (event) => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        setActive(true);
        noteInput();
      }
    });
    button.addEventListener('keyup', () => setActive(false));
  };

  pressAndHold(controls.fireButton, (active) => {
    isFiring = active;
  });
  pressAndHold(controls.aimButton, (active) => {
    isAiming = active;
  });
}
