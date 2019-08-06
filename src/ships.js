/* eslint-disable func-names */
(function exportShip() {
  function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }
  Ship.prototype = {
    setSail() {
      console.log('set sail!')
      const itinerary = this.itinerary;
      const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

      if (currentPortIndex === (itinerary.ports.length - 1)) {
        throw new Error('End of itinerary reached');
      }

      this.previousPort = this.currentPort;
      this.currentPort = null;
      console.log(this.previousPort, 'prev should be new york');
    },
    docking() {
      const itinerary = this.itinerary;
      console.log(this.previousPort, 'previous');
      console.log(this.currentPort, 'current');
      const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
      console.log(previousPortIndex);

      this.currentPort = itinerary.ports[previousPortIndex + 1];

      this.currentPort.addShip(this);
    },
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
}());
