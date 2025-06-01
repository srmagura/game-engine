import p5 from 'p5';
import { GameObjectModel } from './GameObjectModel';
import { ImageRegistry } from './imageRegistry';
import type { GameContext } from './GameContext';

const model = new GameObjectModel();
const imageRegistry = new ImageRegistry();

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(800, 500);

    imageRegistry.load(p);
  };

  p.draw = () => {
    p.background('#ddd');

    const ctx: GameContext = { p, imageRegistry };
    model.render(ctx);
  };
};

export function createSketch() {
  const p = new p5(sketch);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).p = p;
}
