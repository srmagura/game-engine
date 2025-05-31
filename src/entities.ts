import type p5 from 'p5';

export interface Renderable {
  render(p: p5): void;
}

export class Character implements Renderable {
  private readonly emoji: string;
  private readonly width = 50;

  constructor(emoji: string) {
    this.emoji = emoji;
  }

  render(p: p5) {
    p.rect(50, 50, 50, 50);
    p.textSize(this.width);
    p.text(this.emoji, 50, 100);
  }
}

export class PlayerCharacter extends Character {
  constructor() {
    super('🙂');
  }
}
