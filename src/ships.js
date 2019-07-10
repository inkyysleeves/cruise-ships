/* eslint-disable func-names */
function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
  this.currentPort.addShip(this);
}
Ship.prototype = {
  setSail: function () {
    this.previousPort = this.currentPort;
    this.currentPort = null;
  },
  docking() {
    const itinerary = this.itinerary;

    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

    this.currentPort = itinerary.ports[previousPortIndex + 1];

    this.currentPort.addShip(this);
  },
};


module.exports = Ship;
