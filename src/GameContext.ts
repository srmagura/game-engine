import type p5 from 'p5';
import type { ImageRegistry } from './imageRegistry';

export interface GameContext {
  p: p5;
  imageRegistry: ImageRegistry;
}
