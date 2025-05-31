import p5 from 'p5';
import { GameObjectModel } from './GameObjectModel';

const model = new GameObjectModel();

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(800, 500);

    await p.loadImage('player.svg');
  };

  p.draw = () => {
    p.background('#ddd');
    model.render(p);
  };
};

export function createSketch() {
  new p5(sketch);
}
