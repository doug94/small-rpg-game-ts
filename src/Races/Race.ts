export default abstract class Race {
  constructor(protected _name: string, protected _dexterity: number) {}

  get name() { return this._name; }

  get dexterity() { return this._dexterity; }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
