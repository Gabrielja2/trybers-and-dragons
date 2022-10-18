export default abstract class Race {
  private _name: string;

  private _dexterity: number;

  constructor(name:string, dex:number) {
    this._name = name;
    this._dexterity = dex; 
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}