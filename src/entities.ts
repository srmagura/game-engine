import type { GameContext } from './GameContext';

export interface Renderable {
  render(ctx: GameContext): void;
}

export type Point = [x: number, y: number];

export class Character implements Renderable {
  private readonly imageName;
  private readonly width = 48;

  private position: Point = [0, 0];

  constructor(imageName: string) {
    this.imageName = imageName;
  }

  render({ p, imageRegistry }: GameContext) {
    p.image(
      imageRegistry.get(this.imageName),
      this.position[0],
      this.position[1],
      this.width,
      this.width
    );
  }
}

export class PlayerCharacter extends Character {
  constructor() {
    super('player');
  }
}
