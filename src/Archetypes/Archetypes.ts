import { EnergyType } from '../Energy';

export default abstract class Archetypes {
  private _special: number;
  private _cost: number;

  constructor(protected _name: string) {
    this._special = 0;
    this._cost = 0;
  }

  get name() { return this._name; }

  get special() { return this._special; }

  get cost() { return this._cost; }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}