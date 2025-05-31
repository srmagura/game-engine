import type p5 from 'p5';

export class ImageRegistry {
  private readonly registry: Record<string, p5.Image> = {};

  async load(p: p5) {
    const image = p.loadImage('player.svg');
    this.registry['player'] = image;
  }
}
