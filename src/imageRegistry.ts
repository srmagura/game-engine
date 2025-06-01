import type p5 from 'p5';

export class ImageRegistry {
  private readonly registry: Record<string, p5.Image> = {};

  get(name: string): p5.Image {
    return this.registry[name];
  }

  async load(p: p5) {
    const image = await p.loadImage('/player.png');
    this.registry['player'] = image;
  }
}
