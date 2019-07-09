/* eslint-disable func-names */
function Ship(currentPort) {
  this.currentPort = currentPort;
}
Ship.prototype = {
  setSail: function () {
    this.currentPort = undefined;
  },
  docking: function (port) {
    this.currentPort = port;
  },
};


module.exports = Ship;
