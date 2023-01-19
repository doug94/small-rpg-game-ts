import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(player: Fighter, private oponents: SimpleFighter[]) {
    super(player);
  }

  private arePlayerAndOponentsAlive(): boolean {
    return this.player.lifePoints !== -1
      && this.oponents.some((item) => item.lifePoints !== -1);
  }

  private getRandomOponent(): SimpleFighter {
    return this.oponents[getRandomInt(0, this.oponents.length - 1)];
  }

  fight(): number {
    while (this.arePlayerAndOponentsAlive()) {
      this.player.attack(this.getRandomOponent());
      if (this.arePlayerAndOponentsAlive()) {
        this.getRandomOponent().attack(this.player);
      }
    }
    return super.fight();
  }
}