const Port = require('../src/port.js');

describe(' Port', () => {
  it('it can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('my port has a name', () => {
    const port = new Port('Dover');

    expect(port.name).toEqual('Dover');
  });
});
