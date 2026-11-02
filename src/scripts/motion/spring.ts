export class Spring {
  value = 0;
  private velocity = 0;

  constructor(
    private readonly stiffness: number,
    private readonly damping: number,
  ) {}

  step(target: number, deltaSeconds: number): number {
    const acceleration = (target - this.value) * this.stiffness - this.velocity * this.damping;
    this.velocity += acceleration * deltaSeconds;
    this.value += this.velocity * deltaSeconds;
    return this.value;
  }

  kick(impulse: number): void {
    this.velocity += impulse;
  }
}
