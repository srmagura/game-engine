import type p5 from 'p5';
import type { ImageRegistry } from './imageRegistry';

export interface RenderContext {
  p: p5;
  imageRegistry: ImageRegistry;
}
