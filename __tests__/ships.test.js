const Ship = require('../src/ships.js');
const Port = require('../src/port.js');

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});
it('has a starting port', () => {
  const ship = new Ship(Port);
  expect(ship.currentPort).toBe(Port);
});
it('can set sail', () => {
  const port = new Port('dover');
  const ship = new Ship(port);
  ship.setSail();
  expect(ship.currentPort).toBeFalsy();
});
it('can dock at a different port', () => {
  const dover = new Port('Dover');
  const ship = new Ship(dover);
  const calais = new Port('Calais');
  ship.docking(calais);
  expect(ship.currentPort).toBe(calais);
});
