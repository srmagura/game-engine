import type p5 from 'p5';

export interface Renderable {
  render(p: p5): void;
}

export class Character implements Renderable {
  private readonly imageName;
  private readonly width = 50;

  constructor(imageName: string) {}

  render(p: p5) {
    p.rect(50, 50, 50, 50);
    p.textSize(this.width);
  }
}

export class PlayerCharacter extends Character {
  constructor() {
    super('player');
  }
}
