const LivingThing = require('./LivingThing');

module.exports = class Bacteria extends LivingThing {
  constructor(name) {
    super(name, true, false, false, true, false);
    this._name = name;
  }
};