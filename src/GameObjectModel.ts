import type p5 from 'p5';
import { PlayerCharacter, type Character } from './entities';
import type { RenderContext } from './RenderContext';

const player = new PlayerCharacter();

export class GameObjectModel {
  protected readonly characters: Character[] = [player];
  currentPlayer: PlayerCharacter = player;

  update(p: p5) {
    for (const character of this.characters) {
      character.update(p);
    }
  }

  render(ctx: RenderContext) {
    for (const character of this.characters) {
      character.render(ctx);
    }
  }
}
