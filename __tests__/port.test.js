/* eslint-disable no-unused-vars */
const Port = require('../src/port.js');
const Ship = require('../src/ships.js');

describe('Port', () => {
  it('it can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('my port has a name', () => {
    const port = new Port('Dover');

    expect(port.name).toEqual('Dover');
  });
});
describe('adds a ship on instantiation', () => {
  it('tests if the port has a ship', () => {
    const port = new Port('Dover');
    const ship = {};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
});
it('removes a ship', () => {
  const port = new Port('Dover');
  const titanic = {};
  const hmsVictory = {};

  port.addShip(titanic);
  port.addShip(hmsVictory);
  port.removeShip(hmsVictory);

  expect(port.ships).toEqual([titanic]);
});
