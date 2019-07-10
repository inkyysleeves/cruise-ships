function Port(name) {
  this.name = name;
  this.ships = [];
}
Port.prototype = {
  addShip: function addShip(ship) {
    this.ships.push(ship);
  },
  removeShip: function removeShip(ship) {
    // eslint-disable-next-line no-plusplus 
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i] === ship) {
        this.ships.splice(i, 1);
      }
    }
  },
};

module.exports = Port;
