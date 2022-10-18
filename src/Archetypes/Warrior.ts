import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  energyType: EnergyType;
  static instance = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instance;
  }
}