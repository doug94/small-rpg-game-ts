import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player1: Fighter, private player2: Fighter) {
    super(player1);
  }

  private areBothPlayersAlive(): boolean {
    return this.player.lifePoints !== -1 && this.player2.lifePoints !== -1;
  }

  fight(): number {
    while (this.areBothPlayersAlive()) {
      this.player.attack(this.player2);
      if (this.areBothPlayersAlive()) {
        this.player2.attack(this.player);
      }
    }
    return super.fight();
  }
}