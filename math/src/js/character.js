export default class Character {
  constructor(attack, distance) {
    this.baseAttack = attack;
    this.distance = distance;
    this._stoned = false;
  }

  get attack() {
    const attack = Math.max((1 - 0.1 * (this.distance - 1)) * this.baseAttack, 0);
    if (!this.stoned) {
      return attack;
    }

    return Math.max(attack - Math.log2(this.distance) * 5, 0);
  }

  set attack(attack) {
    this.baseAttack = attack;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }
}