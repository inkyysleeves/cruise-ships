function Ship(_startingPort) {
  this.startingPort = 'Dover';
};
Ship.prototype = {
  setSail: function() {
    this.startingPort = undefined;
  },
};


module.exports = Ship;
