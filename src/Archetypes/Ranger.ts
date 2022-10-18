import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  energyType: EnergyType;
  static instance = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instance;
  }
}