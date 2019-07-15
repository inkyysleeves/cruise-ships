const Ship = require('../src/ships.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js')

describe('Ship', () => {
  it('can be instantiated', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
});
it('has a starting port', () => {
  const port = new Port('Dover');
  const itinerary = new Itinerary([port]);
  const ship = new Ship(itinerary);

  expect(ship.currentPort).toEqual(port);
});
it('can set sail', () => {
  const dover = new Port('Dover');
  const calais = new Port('Calais');
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);
  ship.setSail();
  expect(ship.currentPort).toBeFalsy();
  expect(dover.ships).not.toContain([ship]);
});
it('can dock at a different port', () => {
  const dover = new Port('Dover');
  const calais = new Port('Calais');
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);

  ship.setSail();
  ship.docking(calais);
  expect(ship.currentPort).toEqual(calais);
  expect(calais.ships).toContain(ship);
});
it('gets added to the port on instantiation', () => {
  const dover = new Port('Dover');
  const itinerary = new Itinerary([dover]);
  const ship = new Ship(itinerary);

  expect(dover.ships).toContain(ship);
});
it('can\'t sail further than its itinerary', () => {
  const dover = new Port('Dover');
  const calais = new Port('Calais');
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);
  ship.setSail();
  ship.docking();

  expect(() => ship.setSail()).toThrowError('End of itinerary reached');
});
