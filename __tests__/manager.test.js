const { test, expect } = require('@jest/globals');
const Manager = require('../lib/manager.js');

test('Shows an object with name and id', () => {
    const manager = new Manager(444, 'Cynthia')
      expect(manager.name).toEqual('Cynthia')
      expect(manager.id).toEqual(444)
      expect(manager.email).toEqual("cyn@gmail.com")
});