import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  energyType: EnergyType;
  static instance = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instance;
  }
}