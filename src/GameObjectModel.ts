import { PlayerCharacter, type Character } from './entities';
import type { GameContext } from './GameContext';

export class GameObjectModel {
  private readonly characters: Character[] = [new PlayerCharacter()];

  render(ctx: GameContext) {
    for (const character of this.characters) {
      character.render(ctx);
    }
  }
}
