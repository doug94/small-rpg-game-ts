import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
  }

  get race() { return this._race; }

  get archetype() { return this._archetype; }

  get lifePoints() { return this._lifePoints; }

  get strength() { return this._strength; }

  get defense() { return this._defense; }

  get dexterity() { return this._dexterity; }

  get energy() { return { ...this._energy }; }

  receiveDamage(attackPoints: number): number {
    let damage = attackPoints - this._defense;
    if (damage <= 0) damage = 1;
    this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    const buff = getRandomInt(1, 10);
    if (this._maxLifePoints + buff > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else this._maxLifePoints += buff;
    this._strength += buff;
    this._dexterity += buff;
    this._defense += buff;
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength * 2);
  }
}