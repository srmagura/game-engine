import type p5 from 'p5';
import { PlayerCharacter, type Character } from './entities';

export class GameObjectModel {
  private readonly characters: Character[] = [new PlayerCharacter()];

  render(p: p5) {
    for (const character of this.characters) {
      character.render(p);
    }
  }
}
