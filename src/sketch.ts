import p5 from 'p5';
import { GameObjectModel } from './GameObjectModel';
import { ImageRegistry } from './imageRegistry';
import type { RenderContext } from './RenderContext';

const model = new GameObjectModel();
const imageRegistry = new ImageRegistry();

const sketch = (p: p5) => {
  p.setup = () => {
    p.frameRate(60);
    p.createCanvas(800, 500);

    imageRegistry.load(p);
  };

  p.draw = () => {
    p.background('#ddd');

    model.update(p);

    const ctx: RenderContext = { p, imageRegistry };
    model.render(ctx);
  };
};

export function createSketch() {
  const p = new p5(sketch);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).p = p;

  return () => {
    p.remove();
  };
}
