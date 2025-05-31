import p5 from 'p5';

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(800, 500);
  };

  p.draw = () => {
    p.background('#ddd');
  };
};

export function createSketch() {
  new p5(sketch);
}
