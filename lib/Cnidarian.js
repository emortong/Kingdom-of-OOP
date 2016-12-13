const Animal = require('./Animal');

module.exports = class Cnidarian extends Animal {
  constructor(name) {
    super(name, 'radial');
  }
};