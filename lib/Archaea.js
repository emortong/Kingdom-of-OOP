const LivingThing = require('./LivingThing');

module.exports = class Archaea extends LivingThing {
  constructor(name) {
    super(name, true, false, true, true, false);
    this._name = name;
  }
};