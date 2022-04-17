const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const Manager = require('../lib/manager.js');

describe('Managers', () => {
  describe('Generated', () => {
    it('Show an object, name and id', () => {
      const manager = new Manager('Cynthia', 444)
        expect(manager.name).toEqual('Cynthia')
        expect(manager.id).toEqual(444)
    })
  })
});