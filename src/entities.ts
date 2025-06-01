import type p5 from 'p5';
import type { RenderContext } from './RenderContext';

export interface Renderable {
  render(ctx: RenderContext): void;
}

export interface Updatable {
  update(p: p5): void;
}

export class PositionObject {
  position: Point = [0, 0];
  velocity: Point = [0, 0];

  update() {
    console.log(this.velocity);
  }
}

export type Point = [x: number, y: number];

export class Character implements Renderable, Updatable {
  private readonly imageName;
  protected readonly width = 48;

  protected readonly pos = new PositionObject();

  constructor(imageName: string) {
    this.imageName = imageName;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(_p: p5) {
    this.pos.update();
  }

  render({ p, imageRegistry }: RenderContext) {
    p.image(
      imageRegistry.get(this.imageName),
      this.pos.position[0],
      this.pos.position[1],
      this.width,
      this.width
    );
  }
}

const PLAYER_SPEED = 1;

export class PlayerCharacter extends Character {
  constructor() {
    super('player');
  }

  update(p: p5) {
    console.log('player update', p.keyIsDown(65));
    // A
    // if (p.keyIsDown(65)) {
    //   console.log('set velocity');
    //   this.pos.velocity = [-1 * PLAYER_SPEED, 0];
    // }
    //super.update(p);
  }
}
