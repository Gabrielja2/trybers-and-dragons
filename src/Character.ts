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

  constructor(_name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(_name, this._dexterity);
    this._archetype = new Mage(_name);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      amount: getRandomInt(1, 10),
      type_: this._archetype.energyType,
    };
  }

  get dexterity() {
    return this._dexterity;
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  } 

  get lifePoints() {
    return this._lifePoints;
  } 

  get energy() : Energy {
    return { 
      type_: this._energy.type_, 
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const hitPoint = attackPoints - this._defense;
    if (hitPoint > 0) this._lifePoints -= hitPoint;
    if (this._lifePoints <= 0) this._lifePoints = -1;    
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}