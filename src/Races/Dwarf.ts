import Race from './Race';

export default class Dwarf extends Race {
  maxLifePoints = 80;
  constructor() {
    super('Dwarf', 5);
  }
}